import { combineReducers } from 'redux'
import widgetsReducer from './widgets'

import {
  INCREMENT,
  DECREMENT,
  PING,
  PONG
} from '@store/actions/action-types'

export const incrementReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

export const pingReducer = (state = { isPinging: false }, action) => {
  switch (action.type) {
    case PING:
      return { isPinging: true }
    case PONG:
      return { isPinging: false }
    default:
      return state
  }
}

export default combineReducers({
  counter: incrementReducer,
  ping: pingReducer,
  widgets: widgetsReducer
})