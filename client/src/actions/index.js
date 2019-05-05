import {FETCH_IMAGE} from './types'
import streams from '../apis/streams'
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

export const createStream = (formValues) => async (dispatch, getState) => {
  const {userId} = getState().auth
  const res = await streams.post('/streams', {...formValues, userId})
  dispatch({
    type: FETCH_IMAGE,
    payload: res.data
  })
  history.push('/')
}
