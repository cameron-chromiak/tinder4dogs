import {FETCH_IMAGE} from './types'
import {dogAPI, serverAPI} from '../apis/apiUrls'
import history from '../history'

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

export const fetchImage = () => async dispatch => {
  const res = await dogAPI.get('/breeds/image/random')
  // let x = {data: true}
  dispatch({
    type: FETCH_IMAGE,
    payload: res.data
  })
  // history.push('/')
}

export const saveImageToUser = (url, id) => async dispatch =>{
  const res = await serverAPI.post('/api/user/save', {url, id})
}
