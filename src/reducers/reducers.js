import { combineReducers } from 'redux'
import router from 'redux-router/lib/routerStateReducer'
import user from './userReducer'

export default combineReducers({
  router,
  user
})
