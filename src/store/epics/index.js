import { combineEpics } from 'redux-observable'
import { fetchPosts } from './widgets'


import { filter, mapTo, delay } from 'rxjs/operators'

export const pingEpic = action$ => action$.pipe(
  filter(action => action.type === 'PING'),
  delay(3000),
  mapTo({ type: 'PONG' })
);

export const epics = {
  fetchPosts,
  pingEpic
}

export default combineEpics(fetchPosts, pingEpic)