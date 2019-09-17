import React, { useState, useEffect } from 'react'
import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Input } from 'component-library'
import { css } from 'styled-components'

const USER_QUERY = gql`
  query user(
    $id: ID!
  ) { 
    user(id: $id) {
      id
      firstName
      lastName
      dob
      email
      __typename
    }
  }`

const UPDATE_USER_MUTATION = gql`
  mutation (
    $id: ID!
    $firstName: String
    $lastName: String
    $email: String
    $dob: String
  ) {
    updateUser(
      id: $id
      firstName: $firstName
      lastName: $lastName
      email: $email
      dob: $dob
    ) {
      id
      firstName
      lastName
      email
      dob
      __typename
    }
  }
  `



export default function User(props) {
  const [key, setKey] = useState(false)
  const [value, setValue] = useState(false)
  
  const variables = { id: props.match.params.id }
  const { loading, error, data  } = useQuery(USER_QUERY, { variables })
  const [updateUser] = useMutation(UPDATE_USER_MUTATION)

  function handleKeyPress(e) {
    e.preventDefault()
    if (e.keyCode === 13) {
      console.log('hellllllo')
    }
  }

  const user = !loading && !error && data.user

  const isEditing = k => key === k && k
  
  function handleEdit(k) {
    if(isEditing(k)) {
      console.log('key', key)
      const { id } = user
      const variables = { id, [k]: (value || user[k]) }
      updateUser({ variables })
      setKey(false)
      setValue(false)
    } else {
      setKey(k)
    }
  }

  function handleChange(e) {
    setValue(e.target.value)
  }

  function handleBack() {
    props.history.push('/users')
  }

  return (
    <div className='px2'>
      <button
        className='mr2 inline-block'
        onClick={handleBack}
        style={{
          transform: 'rotateY(180deg)',
          verticalAlign: 'text-bottom'
        }}>
        ☞
      </button>
      <h2 className='inline-block'>User Page</h2>
      <div>
        {user && Object.entries(user)
          .map(([k, v]) => !['id', '__typename'].includes(k)  && (
            <div key={v}>
              <span className='pr2'>
                {k} — {isEditing(k) 
                  ? <Input 
                      css={css`input { display: inline; }`}
                      type={k === 'dob' ? 'date' : 'text'}
                      defaultValue={v} 
                      onChange={handleChange} /> 
                  : v}
              </span>
              <button onClick={() => handleEdit(k)}>✂︎</button>
            </div>
        ))}
      </div>
    </div>
  )
}