import { CALL_API } from '../constants/actionTypes'

const apiCallMiddleware = ({dispatch, getState}) => next => action => {
  if (action.type !== CALL_API) return next(action)

  if (!action[CALL_API].types) {
    throw new Error("You have to specify a 'types' object in your CALL_API Object, structured like this: \n { REQUEST, SUCCESS, ERROR }")
  } else if (!action[CALL_API].promise) {
    throw new Error("You have to specify a 'promise' property in your CALL_API Object")
  }

  const { types, promise, data } = action[CALL_API]

  function actionWith(data = {}) {
    const finalAction = { ...action, ...data }
    delete finalAction[CALL_API]
    return finalAction
  }

  next(actionWith({
    type: types.REQUEST,
    data
  }))

  promise.then(
    response => next(actionWith({
      type: types.SUCCESS,
      response
    })),
    (error) => next(actionWith({
      type: types.ERROR,
      message: error.message
    }))
  )
}

export default apiCallMiddleware
