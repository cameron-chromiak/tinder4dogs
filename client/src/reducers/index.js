import {combineReducers} from 'redux'
import authReducer from './AuthReducer'
import images from './mainReducer'

export default combineReducers({
  auth: authReducer,
  images: images,
  profile: images,
})
