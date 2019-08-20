import React, { Suspense, lazy } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import store from '../store'
import Header from '../components/header.jsx'
import ApolloClient from 'apollo-boost'
import Loading from '../components/loader.jsx'

const Solutions = lazy(() => import('../pages/solutions.jsx'))
const About = lazy(() => import('../pages/about.jsx'))
const Users = lazy(() => import('../pages/users.jsx'))
const Editor = lazy(() => import('../pages/editor.jsx'))
const Widgets = lazy(() => import('../pages/widgets.jsx'))


const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql/'
})

export default () => (
  <ApolloProvider client={client}>
    <Router>
      <Provider store={store}>
        <Header />
        <Suspense fallback={<Loading />}>
          <Route path="/" exact component={Solutions} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
          <Route path="/editor/" component={Editor} />
          <Route path="/widgets/" component={Widgets} />
        </Suspense>
      </Provider>
    </Router>
  </ApolloProvider>
)