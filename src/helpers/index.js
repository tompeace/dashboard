import { cloneElement } from 'react'

export const cloneChildren = c => p => c.map(e => cloneElement(e, p))

export const processSize = s => !/^\d+$/.test(s) ? s : `${s}px`

export const noop = () => {}

/**
 * @description creates an array of length n, filled optionally with values v
 * @param {Number} n - length of array
 * @param {any} v - thing to fill the array with
 */
export const times = (n, v) => {
  const array = [...Array(n).keys()]
  return v ? array.fill(v) : array
}

/**
* @description returns an object with form elements values keyed by form element name
* @param {Node} target normally target or currentTarget property from Devent
* @returns {object}
*/
export const serializeForm = (target) => {
  const form = new FormData(target)
  return Array
    .from(form)
    .reduce((o, [k, v]) => ({ ...o, [k]: v }), {})
}

export function randomIntInRange(min, max) {
  return Math.random() * (max - min) + min;
}