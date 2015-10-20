import { normalize } from 'normalizr'

const normalizeMiddleware = ({dispatch, getState}) => next => action => {
  if (typeof action.normalize === 'undefined') return next(action)

  const { data, schema } = action.normalize
  const mergedAction = { ...action, ...normalize(data, schema) }
  delete mergedAction.normalize

  return next(mergedAction)
}

export default normalizeMiddleware
