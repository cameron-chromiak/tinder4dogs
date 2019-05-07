import _ from 'lodash'

import{ FETCH_IMAGE } from '../actions/types'


export default (state={}, action) =>{
  switch (action.type) {
    case FETCH_IMAGE:
      return {...state, images: action.payload}
    default:
      return state

  }
}