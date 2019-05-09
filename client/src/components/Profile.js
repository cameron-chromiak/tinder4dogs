import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUserProfile} from '../actions/index'
import '../styles/ProfileStyle.css'
// import ImageOptionsMask from './ImageOptionsMask'
import UserHeader from './UserHeader'

// TODO: if not that users page add heart; pass props to UserHeader
class Browse extends Component{

  componentDidMount(){
    this.props.fetchUserProfile(this.props.match.params.id)
  }

  deleteImage = (e) =>{
    console.log(e.target);
  }

  renderProfile(){
    const {profile} = this.props.profile.profile
    if(profile.savedImages.length < 1){
      return( <div>No images</div>)
    }

    return(
      profile.savedImages.map((image, i)=>{
        return(
          <div key={i} onClick={this.deleteImage} className='image-container'>
            <img className='image' src={image} alt='Image not available'/>
            <i className="trash icon"/>
            {/*<i class="heart icon"/> if not users page*/}
          </div>
        )
      })
    )
  }

  render(){
    if(!this.props.profile.profile){
      return(
        <div>
            Loading
        </div>
      )
    }
      return <div className='container'>
        <UserHeader/>
      {this.renderProfile()}</div>
  }
}


const mapStateToProps = state =>{
  return{profile: state.profile}
}

export default connect(mapStateToProps, {fetchUserProfile})(Browse)
