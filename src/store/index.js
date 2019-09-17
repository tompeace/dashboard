import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { createLogger } from 'redux-logger'
import rootEpic from './epics'
import rootReducer from './reducers'
import { BehaviorSubject } from 'rxjs';
import io from 'socket.io-client'
import initialState from './initial-state'

const logger = createLogger({ collapsed: true })
const sock$ = new BehaviorSubject(null)

const epicMiddleware = createEpicMiddleware({
	dependencies: { 
		io, 
		sock$, 
		localStorage, 
		defaultServer: '//localhost:4000'
	} 
})

const middleware = applyMiddleware(epicMiddleware, logger)

const store = createStore(rootReducer, initialState, middleware)

epicMiddleware.run(rootEpic)

export default store