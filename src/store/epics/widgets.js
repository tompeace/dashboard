import {
  map,
  switchMap,
  takeUntil,
  filter,
  mergeMap,
  catchError
} from 'rxjs/operators'
import { timer, from, of } from 'rxjs'
import { ofType } from 'redux-observable'
import { 
  FETCH,
  FETCH_SUCCESS,
  FETCH_FAILED,
  CANCEL_POLLING
 } from '../actions/action-types'
import { fetch } from '../../services'


const POLLING_INTERVAL = 3000
const url = 'https://jsonplaceholder.typicode.com/posts/1'

const fetchStuff = (...args) => {
  console.log(args)
  return fetch(url)
}

export const fetchPosts = (action$, ...rest) => {
  console.log(action$, rest);
  
  return action$.pipe(
  ofType(FETCH),
  mergeMap(action => {

    return timer(0, POLLING_INTERVAL).pipe(
      switchMap(() =>
        from(fetch(url)).pipe(
          map(data => ({
            type: FETCH_SUCCESS,
            payload: { data, widgetId: 'action.payload.widgetId' },
          })),
          catchError(error =>
            of({
              type: FETCH_FAILED,
              payload: { error, widgetId: 'action.payload.widgetId' },
            })
          )
        )
      ),
      takeUntil(
        action$.pipe(
          ofType(CANCEL_POLLING),
          filter(stopAction => stopAction.payload.widgetId === action.payload.widgetId),
        )
      )
    )
  })
)}
