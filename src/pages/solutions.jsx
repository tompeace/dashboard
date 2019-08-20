import React from 'react'
import gql from 'graphql-tag'
import Query from '../components/query.jsx';

const SOLUTIONS_QUERY = gql`
{
  allSolutions {
    id
    name
  }
}`

export default function Solutions(props) {
  return (
    <Query query={SOLUTIONS_QUERY}>
      {({ allSolutions }) => (
        <div>
          <h2>Solutions Page</h2>
          <ul>
            {allSolutions.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      )}
    </Query>
  )
}

