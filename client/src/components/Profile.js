import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUserProfile} from '../actions/index'

class Browse extends Component{

  componentDidMount(){
    this.props.fetchUserProfile(this.props.match.params.id)
  }


  renderProfile(){
    const {profile} = this.props.profile.profile
    return(
      profile.savedImages.map(image =>{
        return(
          <div>
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  <img src={image}/>
                </div>
              </div>
            </div>
          </div>
        )
      })
    )
  }

  render(){
    if(this.props.profile.profile){
      return <div>{this.renderProfile()}</div>
    }
    return(
      <div classNameName=''>
          Profile
      </div>
    )
  }
}


const mapStateToProps = state =>{
  return{profile: state.profile}
}

export default connect(mapStateToProps, {fetchUserProfile})(Browse)
