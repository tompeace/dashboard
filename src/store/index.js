import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { createLogger } from 'redux-logger'

import rootEpic from './epics'
import rootReducer from './reducers'

import initialState from './initial-state'

const logger = createLogger({ collapsed: true })

const epicMiddleware = createEpicMiddleware()
const middleware = applyMiddleware(epicMiddleware, logger)

const store = createStore(rootReducer, initialState, middleware)

epicMiddleware.run(rootEpic)

export default store