import {FETCH_IMAGE, FETCH_USER_PROFILE, UPDATE_PROFILE, DELETE_IMAGE} from './types'
import {dogAPI, serverAPI} from '../apis/apiUrls'
// import history from '../history'

export const signIn = (userId) =>{
  return{
    type: 'SIGN_IN',
    payload: userId
  }
}

export const signOut = () =>{
  return{
    type: 'SIGN_OUT'
  }
}

export const createProfile = (id) => async dispatch =>{
  const res = await serverAPI.post('/api/user/create', {id})
}

export const fetchImage = () => async dispatch => {
  const res = await dogAPI.get('/breeds/image/random')
  dispatch({
    type: FETCH_IMAGE,
    payload: res.data
  })
}

// TODO: send response verification
export const saveImageToUser = (url, id) => async dispatch =>{
  const res = await serverAPI.post('/api/user/save', {url, id})
}

export const fetchUserProfile = id => async dispatch =>{
  const res = await serverAPI.post('/api/user/profile', {id})
  dispatch({
    type: FETCH_USER_PROFILE,
    payload: res.data
  })
}

export const updateProfile = (id, data) => async dispatch =>{
  const res = await serverAPI.post('/api/user/updateProfile', {id, data})
  dispatch({
    type: UPDATE_PROFILE,
    payload: res.data
  })
}
export const deleteImage = (id, src) => dispatch =>{
  serverAPI.post('/api/user/deleteImage', {id, src})
  // dispatch({
  //   type: DELETE_IMAGE,
  //   payload: res.data
  // })

}
