import React from 'react'
import {connect} from 'react-redux'
import '../styles/Main.css'

class UserHeader extends React.Component{

  render(){
    return(
      <div className='user-header-container ui segment'>
        <div className='user-header-image'>
          <img src="" alt="Profile Pic"/>
        </div>
        <div className='user-header-name'>
          <h3>NAMe</h3>
          <h3>NAMe</h3>
        </div>
        <div className='user-header-about'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est explicabo vel, aliquid blanditiis ipsa expedita placeat ad non atque debitis magnam necessitatibus, sequi! Ab totam soluta aliquam iste architecto nihil labore ut! Earum provident quo eum. Aspernatur laudantium, excepturi explicabo.</p>
        </div>
      </div>
    )
  }
}

export default UserHeader
