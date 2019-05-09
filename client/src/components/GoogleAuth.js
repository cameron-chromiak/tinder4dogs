import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signIn, signOut, createProfile} from '.././actions'

class GoogleAuth extends Component{


  componentDidMount(){
    window.gapi.load('client:auth2', () =>{
      window.gapi.client.init({
        client_id: '951358901456-m6n9rac87saoti5sogibhopudhi60137.apps.googleusercontent.com',
        scope: 'email'
      }).then( () =>{
        this.auth = window.gapi.auth2.getAuthInstance()
        this.onAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  onAuthChange = (isSignedIn) =>{
    if(isSignedIn){
      let userId = this.auth.currentUser.get().getId()
      this.props.signIn(userId)
      this.props.createProfile(userId)
    }else{
      this.props.signOut()
    }
  }

  onSignInClick = () =>{
    this.auth.signIn()
  }

  onSignOutClick = () =>{
    this.auth.signOut()
  }

  renderAuthButton(){
    if(this.props.isSignedIn === null){
       return null
    }else if(this.props.isSignedIn){
        return (
          <button onClick={this.onSignOutClick} className='ui red google button'>
            <i className='google icon'/>Sign Out
          </button>
        )
    }else{
      return (
        <button onClick={this.onSignInClick} className='ui red google button'>
          <i className='google icon'/>Sign In
        </button>
      )
    }
  }

  render(){


    return(
      <div>{this.renderAuthButton()}</div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps, {signIn, signOut, createProfile})(GoogleAuth)
