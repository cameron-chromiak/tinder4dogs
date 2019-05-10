import React from 'react'
import {connect} from 'react-redux'
import ContentEditable from 'react-contenteditable'
import {updateProfile} from '../actions/index'
import {auth} from '../reducers/index'
import '../styles/Main.css'

class UserHeader extends React.Component{

  state={
    isEditable: false,
    aboutMeText: '',
    firstName: '',
    lastName: ''
  }

  componentDidMount(){

    let {firstName, lastName, aboutMeText} = this.props.functions.profile.profile
    this.setState({
      firstName,
      lastName,
      aboutMeText
    })
  }


  toggleEditClass = () =>{
    this.setState({isEditable: !this.state.isEditable})
  }

  editButtonStyle = () =>{
    let isHidden = this.state.isEditable
    return (isHidden) ? 'ui blue hidden': 'ui button blue'
  }
  renderActionButtons(){
    if(this.props.userInfo.isSignedIn){
      return(
        <span>
          <button className={this.editButtonStyle()} onClick={this.toggleEditClass}>Edit</button>
          <button className={this.saveButtonStyle()} onClick={this.toggleEditClass}>Save</button>
        </span>
      )
    }
  }

  saveButtonStyle = () =>{
    //change button
    let isHidden = !this.state.isEditable
    if(isHidden){
      this.saveProfile()
      return 'ui green hidden'
    }else{
        return 'ui button green'
    }
  }

  saveProfile = () =>{
    let userData = {
      aboutMeText: this.state.aboutMeText,
      firstName: this.state.firstName,
      lastName: this.state.lastName}

    this.props.updateProfile(this.props.userInfo.userId, {userData})
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
         {this.renderActionButtons()}
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
