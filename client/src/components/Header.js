import React from 'react'
import {connect} from 'react-redux'
import auth from '../reducers/'
import {Link} from 'react-router-dom'
import GoogleAuth from './GoogleAuth'

class Header extends React.Component{

  render(){
    const userId = this.props.userInfo.userId

  return(
    <div>
      <div className='ui secondary pointing menu'>
          <Link to='/' className='item'>Tinder for Dogs</Link>
        <div className='right menu'>
          <Link to='/browse' className='item'>Browse</Link>
          <Link to={`/profile/${userId}`} className='item'>Profile</Link>
          <Link to='/' className='item'>Home</Link>
          <GoogleAuth/>
        </div>
      </div>
    </div>
  )
}
}

const mapStateToProps = state =>{
  return {userInfo: state.auth}
}


export default connect(mapStateToProps, auth)(Header)
