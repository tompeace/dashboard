import { map, switchMap, takeUntil, filter, mergeMap, catchError } from 'rxjs/operators'
import { timer, from, of } from 'rxjs'
import { ofType } from 'redux-observable'
import {  FETCH, FETCH_SUCCESS, FETCH_FAILED, CANCEL_POLLING } from '../actions/action-types'
import { fetch } from '../../services'


const POLLING_INTERVAL = 1000
const url = 'https://jsonplaceholder.typicode.com/posts/1'

export const fetchPosts = action$ => action$.pipe(
  ofType(FETCH),
  mergeMap(action => {
    return timer(0, POLLING_INTERVAL).pipe(
      switchMap(() =>
        from(fetch(url)).pipe(
          map(data => ({
            type: FETCH_SUCCESS,
            payload: { data, id: action.payload.id }
          })),
          map(data => ({
            type: 'INCREMENT'
          })),
          catchError(error =>
            of({
              type: FETCH_FAILED,
              payload: { error, id: action.payload.id }
            })
          )
        )
      ),
      takeUntil(
        action$.pipe(
          ofType(CANCEL_POLLING),
          filter(stopAction => {
            console.log(stopAction);
            return stopAction.payload
              ? stopAction.payload.id === action.payload.id
              : true;
          })
        )
      )
    )
  })
)
