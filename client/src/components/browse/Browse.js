import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchImage, saveImageToUser} from '../../actions/index'
import {auth} from '../../reducers/index'

class Browse extends Component{


  componentDidMount(){
    this.props.fetchImage()

  }

  nextImage = () =>{
    this.props.fetchImage()
  }
  previousImage = () =>{
    // go back image in previousImage from state
  }

  saveToUser = () =>{
    let imgUrl = this.props.images.images.message
    let userId = this.props.userInfo.userId

    this.props.saveImageToUser(imgUrl, userId)
  }

  render(){
    const container = {
      height: '50vh'
    }

    if(this.props.images.images){
      return(
        <div className='ui one column stackable center aligned page grid'>
        <div className='computer only row'>
          <div className='column'>
            <img  style={container} src={this.props.images.images.message} alt=''/>
          </div>
        </div>
          <div className=''>
          <button onClick={this.previousImage} className='ui icon button item'><i className='arrow left icon'></i></button>
            <button onClick={this.saveToUser} className='ui icon button item'><i className='heart icon'></i></button>
            <button onClick={this.nextImage} className='ui icon button item'><i className='arrow right icon'></i></button>
          </div>
        </div>
      )
    }
    return(
      <div>
      <div className='ui active inverted dimmer'>
        <div className='ui text loader'>Loading</div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {images: state.images,
          userInfo: state.auth
  }
}


export default connect(mapStateToProps, {fetchImage, saveImageToUser})(Browse)
