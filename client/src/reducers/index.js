import {combineReducers} from 'redux'
import authReducer from './AuthReducer'
import imageReducer from './ImageReducer'

export default combineReducers({
  auth: authReducer,
  images: imageReducer
})
