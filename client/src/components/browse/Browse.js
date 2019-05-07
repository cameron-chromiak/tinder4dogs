import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchImage} from '../../actions/index'


class Browse extends Component{

  componentDidMount(){
    this.props.fetchImage()
  }

  render(){
    return(
      <div className=''>
          Browse
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {images: state.images}
  console.log(this.props);
}


export default connect(mapStateToProps, {fetchImage})(Browse)
