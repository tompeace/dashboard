import fetch from 'node-fetch'

export default function(url, options = {}) {
  const headers = {
    'Content-Type': 'application/json'
  }

  return fetch(url, {
    headers,
    ...options
  })
}