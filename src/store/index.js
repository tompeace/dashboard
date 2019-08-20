import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { logger } from 'redux-logger'

import rootEpic from './epics'
import rootReducer from './reducers'

const initialState = undefined 
// {
//   counter: 23,
//   ping: false
// }

const epicMiddleware = createEpicMiddleware()
const middleware = applyMiddleware(epicMiddleware, logger)
const store = createStore(rootReducer, initialState, middleware)

epicMiddleware.run(rootEpic)

export default store