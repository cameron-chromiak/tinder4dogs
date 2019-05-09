import React from 'react'
import {connect} from 'react-redux'
import ContentEditable from 'react-contenteditable'
import {updateProfile} from '../actions/index'
import {auth} from '../reducers/index'
import '../styles/Main.css'

class UserHeader extends React.Component{

  state={
    isEditable: false,
    aboutMeText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    firstName: 'Test',
    lastName: 'Name'
  }


  toggleEditClass = () =>{
    this.setState({isEditable: !this.state.isEditable})
  }

  editButtonStyle = () =>{
    let isHidden = this.state.isEditable
    return (isHidden) ? 'ui blue hidden': 'ui button blue'
  }

  saveButtonStyle = () =>{

    //cahge button
    let isHidden = !this.state.isEditable


    //send data
    let userData = {
      aboutMeText: this.state.aboutMeText,
      firstName: this.state.firstName,
      lastName: this.state.lastName}
      // TODO: Stop this from running on load
    this.props.updateProfile(this.props.userInfo.userId, userData)


    //return this here, so function runs before
    return (isHidden) ? 'ui green hidden': 'ui button green'
  }

  handleChange = propertyName => e => {
    this.setState({ [propertyName]: e.target.value });
  };

  render(){
    return(
    <div>
      <div className='user-header-container ui segment'>
        <div className='user-header-image'>
          <img src="" alt="Profile Pic"/>
        </div>
        <div className='user-header-name'>
        {/*first Name*/}
        <ContentEditable
        html={this.state.firstName}
        disabled={!this.state.isEditable}
        onChange={this.handleChange('firstName')}
         />
         {/*LastName*/}
        <ContentEditable
        html={this.state.lastName}
        disabled={!this.state.isEditable}
        onChange={this.handleChange('lastName')}
         />
        </div>
        <ContentEditable className='user-header-about'
        html={this.state.aboutMeText}
        disabled={!this.state.isEditable}
        onChange={this.handleChange('aboutMeText')}
         />
        <span>
          <button className={this.editButtonStyle()} onClick={this.toggleEditClass}>Edit</button>
          <button className={this.saveButtonStyle()} onClick={this.toggleEditClass}>Save</button>
        </span>
      </div>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return { userInfo: state.auth,
          functions: state.images
  }
}

export default connect(mapStateToProps, {updateProfile})(UserHeader)
