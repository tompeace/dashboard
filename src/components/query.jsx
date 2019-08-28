import React from 'react'
import { Query } from 'react-apollo'
import Loading from '../components/loader.jsx'

export default ({ children, query }) => (
  <Query query={query}>
    {({ data, loading, error }) => {
      if (error) return JSON.stringify(error, null, 2)
      if (loading) return <Loading />
      if (data) return children(data)
    }}
  </Query>
)