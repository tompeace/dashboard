import { cloneElement } from 'react'

export const cloneChildren = c => p => c.map(e => cloneElement(e, p))

export const processSize = s => !/^\d+$/.test(s) ? s : `${s}px`

export const noop = () => {}

/**
 * creates an array of length n, filled optionally with values v
 * @param {Number} n - length of array
 * @param {any} v - thing to fill the array with
 */
export const times = (n, v) => {
  const array = [...Array(n).keys()]
  return v ? array.fill(v) : array
}

// export const spreadImport = import => Object.values(import)