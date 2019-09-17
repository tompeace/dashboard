import React, { Suspense, lazy } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import store from '../store'
import Menu from '../components/menu.jsx'
// import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'
import ApolloClient from 'apollo-boost'
import Loading from '../components/loader.jsx'

const Home = lazy(() => import('../pages/home.jsx'))
const About = lazy(() => import('../pages/about.jsx'))
const Users = lazy(() => import('../pages/users.jsx'))
const User = lazy(() => import('../pages/user.jsx'))
const Editor = lazy(() => import('../pages/editor.jsx'))
const Widgets = lazy(() => import('../pages/widgets.jsx'))

// const client = new ApolloClient({
//   link: new HttpLink({ uri: 'http://localhost:8080/graphql' }),
//   cache: new InMemoryCache()
// });

const client = new ApolloClient({ 
  uri: 'http://localhost:8081/graphql'
});



export default () => (
  <ApolloProvider client={client}>
    <Router>
      <Provider store={store}>
        <Menu />
        <Suspense fallback={<Loading />}>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route exact path="/users/" component={Users} />
          <Route path="/users/:id/" component={User} />
          <Route path="/editor/" component={Editor} />
          <Route path="/widgets/" component={Widgets} />
        </Suspense>
      </Provider>
    </Router>
  </ApolloProvider>
)