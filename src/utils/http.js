import { BASE_API_URL } from './constants'

export default async function httpRequest (path, config = {}) {
  const baseUrl = BASE_API_URL
  const headers = {
    'Content-Type': 'application/json'
  }

  const conf = { ...config }
  conf.headers = Object.assign({}, headers, conf.headers)

  let response

  try {
    response = await window.fetch(`${baseUrl}${path}`, conf)
  } catch (error) {
    return Promise.resolve({ data: null, error: error })
  }

  if (!response.ok) {
    return Promise.resolve({ data: null, error: response.statusText })
  }

  return Promise.resolve({ data: await response.json(), error: null })
}
