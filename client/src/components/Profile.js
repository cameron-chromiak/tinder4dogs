import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUserProfile, deleteImage} from '../actions/index'
import '../styles/ProfileStyle.css'
// import ImageOptionsMask from './ImageOptionsMask'
import UserHeader from './UserHeader'
import {history} from '../history'

// TODO: if not that users page add heart; pass props to UserHeader
class Browse extends Component{

  componentDidMount(){
    this.props.fetchUserProfile(this.props.match.params.id)
  }

  deleteImage = (e) =>{
    this.props.deleteImage(this.props.auth.userId, e.target.src)
        setTimeout(() => {
        this.props.fetchUserProfile(this.props.match.params.id)
      }, 500);
  }

  renderProfile(){
    const {profile} = this.props.profile.profile
    if(profile.savedImages.length < 1){
      return( <div>No images</div>)
    }

    return(
      profile.savedImages.map((image, i)=>{
        return(
          <div key={i} onDoubleClick={this.deleteImage} className='image-container'>
            <img className='image' src={image} alt='Image not available'/>
            <i  className="trash icon"/>
          </div>
        )
      })
    )
  }

  render(){
    if(!this.props.profile.profile){
      return(
        <div>
          Loading...
        </div>
      )
    }
      return(
       <div className='container'>
        <UserHeader/>
      {this.renderProfile()}
      </div>)
  }
}


const mapStateToProps = state =>{
  return{profile: state.profile,
        auth: state.auth
    }
}

export default connect(mapStateToProps, {fetchUserProfile, deleteImage})(Browse)
