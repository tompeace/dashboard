import { createStore, applyMiddleware, bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { useMemo } from 'react'
import * as epics from '../epics'
import { spreadImport } from '@helpers'
// import someactions from './someactions'

const actions = [epics]

export function useActions(deps) {
  const dispatch = useDispatch()
  return useMemo(() => {
    if (Array.isArray(actions)) {
      return actions.map(a => bindActionCreators(a, dispatch))
    }
    return bindActionCreators(actions, dispatch)
  }, deps ? [dispatch, ...deps] : [dispatch])
}

export * from '../epics'