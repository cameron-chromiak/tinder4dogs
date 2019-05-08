import _ from 'lodash'

import{ FETCH_IMAGE, FETCH_USER_PROFILE } from '../actions/types'


export default (state={}, action) =>{
  switch (action.type) {
    case FETCH_USER_PROFILE:
      return {...state, profile: action.payload}
    case FETCH_IMAGE:
      return {...state, previousImage: state.images,  images: action.payload}
    default:
      return state

  }
}
