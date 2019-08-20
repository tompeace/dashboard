import React from 'react'
import gql from 'graphql-tag'
import Query from '../components/query.jsx'

const USERS_QUERY = gql`
{
  allUsers {
    id
    firstName
    lastName
    isAdmin
  }
}`

export default function Users(props) {
  return (
    <Query query={USERS_QUERY}>
      {({ allUsers }) => (
        <div>
          <h2>Solutions Page</h2>
          <ul>
            {allUsers.map(({ id, firstName, lastName, isAdmin }) => (
              <li key={id}>{firstName} {lastName} {isAdmin && `— admin`}</li>
            ))}
          </ul>
        </div>
      )}
    </Query>
  )
}