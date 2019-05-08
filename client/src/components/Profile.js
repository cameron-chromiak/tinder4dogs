import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUserProfile} from '../actions/index'
import '../styles/ProfileStyle.css'
import ImageOptionsMask from './ImageOptionsMask'


// TODO: if not that users page add heart
class Browse extends Component{

  componentDidMount(){
    this.props.fetchUserProfile(this.props.match.params.id)
  }

  deleteImage = (e) =>{
    console.log(e.target.key);
  }

  renderProfile(){
    const {profile} = this.props.profile.profile
    return(
      profile.savedImages.map((image, i)=>{
        return(
          <div key={i} className='image-container'>
            <img className='image' src={image}/>
            <i onClick={this.deleteImage} class="trash icon"/>
            {/*<i class="heart icon"/> if not users page*/}
          </div>
        )
      })
    )
  }

  render(){
    if(this.props.profile.profile){
      return <div className='container'>{this.renderProfile()}</div>
    }
    return(
      <div>
          Profile
      </div>
    )
  }
}


const mapStateToProps = state =>{
  return{profile: state.profile}
}

export default connect(mapStateToProps, {fetchUserProfile})(Browse)
