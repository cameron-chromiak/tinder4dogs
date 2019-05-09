import React from 'react'
import {connect} from 'react-redux'
import {updateProfile} from '../actions/index'
import '../styles/Main.css'

class UserHeader extends React.Component{

  state={
    isEditable: false,
  }

  toggleEditClass = () =>{
    this.setState({isEditable: !this.state.isEditable})
  }

  editButtonStyle = () =>{
    let isHidden = this.state.isEditable
    return (isHidden) ? 'ui blue hidden': 'ui button blue'
  }
  saveButtonStyle = () =>{
    let isHidden = !this.state.isEditable
    return (isHidden) ? 'ui green hidden': 'ui button green'
    // this.updateProfile(this.props)
  }


  render(){
    const {isEditable} = this.state
    return(
    <div>
      <div className='user-header-container ui segment'>
        <div className='user-header-image'>
          <img src="" alt="Profile Pic"/>
        </div>
        <div className='user-header-name '>
          <h3 contentEditable={`${isEditable}`}>NAMe</h3>
          <h3 contentEditable={`${isEditable}`}>NAMe</h3>
        </div>
        <div className='user-header-about' contentEditable={`${isEditable}`}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est explicabo vel, aliquid blanditiis ipsa expedita placeat ad non atque debitis magnam necessitatibus, sequi! Ab totam soluta aliquam iste architecto nihil labore ut! Earum provident quo eum. Aspernatur laudantium, excepturi explicabo.</p>
        </div>
        <span>
          <button className={this.editButtonStyle()} onClick={this.toggleEditClass}>Edit</button>
          <button className={this.saveButtonStyle()} onClick={this.toggleEditClass}>Save</button>
        </span>
      </div>
      </div>
    )
  }
}

// const mapStateToProps = state =>{
//   return null
// }
//
// export default connect(mapStateToProps, updateProfile)(UserHeader)
