import { map, switchMap, takeUntil, filter, mergeMap, catchError } from 'rxjs/operators'
import { timer, from, of } from 'rxjs'
import { ofType } from 'redux-observable'
import {  WIDGET_CONNECT, FETCH, FETCH_SUCCESS, FETCH_FAILED, CANCEL_POLLING } from '../actions/action-types'
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
            payload: { data, id: action.id }
          })),
          map(data => ({
            type: 'INCREMENT'
          })),
          catchError(error =>
            of({
              type: FETCH_FAILED,
              payload: { error, id: action.id }
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
              ? stopAction.id === action.id
              : true;
          })
        )
      )
    )
  })
)

export const socketConnectEpic = (action$, state$, { io, sock$, defaultServer }) =>
  action$.pipe(
    ofType(connectSocket.getType()),
    pluck('payload'),
    map(dest => io(dest)),
    switchMap(sock =>
      merge(
        fromEvent(sock, 'connect').pipe(mapTo(sock)),
        fromEvent(sock, 'disconnect').pipe(mapTo(null))
      ).pipe(
        startWith(null),
        finalize(() => sock.close()))
    ),
    tap(sock$),
    ignoreElements(),
    startWith(connectSocket(defaultServer)));

export const socketReceiveEpic = (action$, state$, { sock$ }) =>
  sock$.pipe(
    switchMap(sock => sock == null ? EMPTY :
      merge(
        fromEvent(sock, 'update users').pipe(
          map(users => updateUsers(users))),
        fromEvent(sock, 'user joined').pipe(
          map(user => userJoined(user))),
        fromEvent(sock, 'user left').pipe(
          filter(user => 'nick' in user),
          map(user => userLeft(user))),
        fromEvent(sock, 'user change nick',
          (oldUser, newUser) => ({ oldUser, newUser })
        ).pipe(
          map(({ oldUser, newUser }) => userChangedNick(oldUser, newUser))),
        fromEvent(sock, 'message').pipe(
          map(msg => messageReceived(msg)))
      ).pipe(
        startWith(clearChatState()))
    ));

export const socketUserEpic = (action$, state$, { sock$ }) =>
  sock$.pipe(
    switchMap(sock => sock == null ? EMPTY :
      state$.pipe(
        pluck('user'),
        distinctUntilChanged((p, q) => p.nick === q.nick && p.color === q.color),
        tap(({ nick, color }) => sock.emit('user joined', nick, color)),
        ignoreElements())));

export const socketMessageEpic = (action$, state$, { sock$ }) =>
  sock$.pipe(
    switchMap(sock => sock == null ? EMPTY :
      action$.pipe(
        ofType(sendMessage.getType()),
        pluck('payload'),
        tap(msg => sock.emit('message', msg)),
        ignoreElements())));