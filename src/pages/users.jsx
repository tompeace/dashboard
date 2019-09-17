import React, { useState, useEffect } from 'react'
import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { serializeForm } from '@helpers'
import faker from 'faker'
import{ Link } from 'react-router-dom'
import { Button } from 'component-library'

const USERS_QUERY = gql`
query users {
  users {
    id
    _key
    firstName
    lastName
    dob
    email
  }
}`

const CREATE_USER_MUTATION = gql`
mutation (
  $id: ID!
  $firstName: String!
  $lastName: String! 
  $email: String!
  $dob: String
) {
  createUser(
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
  }
}
`

const REMOVE_USER_MUTATION = gql`
mutation ($id: ID!) {
  removeUser(id: $id)
}
`

const makeFakeUser = () => ({
  id: faker.random.number(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email()
})

export default function Users(props) {
  const [createUser] = useMutation(CREATE_USER_MUTATION)
  const [removeUser] = useMutation(REMOVE_USER_MUTATION)
  const { error, loading, data } = useQuery(USERS_QUERY)

  const [fakeUser, setFakeUser] = useState(makeFakeUser())
  
  async function handleSubmit(e) {
    e.preventDefault()

    const variables = serializeForm(e.target)
    const refetchQueries = [{ query: USERS_QUERY }]

    await createUser({ variables, refetchQueries })
    setFakeUser(makeFakeUser())
  }

  async function handleRemove(id) {
    const variables = { id }
    const refetchQueries = [{ query: USERS_QUERY }]
    
    await removeUser({ variables, refetchQueries })
  } 

  const users = !loading && !error && data.users

  return (
    <div>
      <h2 className='pl2'>Users Page</h2>
      <div className='flex'>
        <ul className='flex-auto'>
        {users && users.map(({ _key, firstName, lastName }) => (
          <li key={_key}>
            <Link 
              className='pr2' 
              to={`/users/${_key}`}>
              {firstName} {lastName}
            </Link>
            <button onClick={() => handleRemove(_key)}>✕</button>
          </li>
        ))}
        </ul>
        <form  
          className='flex-auto mt2'
          onSubmit={handleSubmit}>
          <input 
            type='hidden' 
            name='id' 
            key={fakeUser.id}
            defaultValue={fakeUser.id}/>
          <div>
            <input 
              key={fakeUser.firstName}
              defaultValue={fakeUser.firstName} 
              type='text' 
              name='firstName'
            />
          </div>
          <div>
            <input 
              key={fakeUser.lastName}
              defaultValue={fakeUser.lastName} 
              type='text' 
              name='lastName'
            />
          </div>
          <div>
            <input 
              key={fakeUser.email}
              defaultValue={fakeUser.email} 
              type='email' 
              name='email'
            />
          </div>
          <button>
            Add User
          </button>
        </form>
      </div>
    </div>
  )
}