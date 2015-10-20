const errorCatcherMiddleware = ({dispatch, getState}) => next => action => {
  try {
    return next(action);
  } catch(e) {
    console.error('Action Error :', action.type, ':', e.message)
  }
}

export default errorCatcherMiddleware
