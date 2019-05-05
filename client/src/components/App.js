import React, {Component} from 'react'
import {Router, Route, Link, Switch} from 'react-router-dom'

import Browse from './browse/Browse'
import Home from './browse/HomePage'
import Header from './Header'
import Profile from './Profile'
import history from '../history'

const App = () =>{
  return(<div className='ui container'>
      <Router history={history}>
        <div>
          <Header/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/browse' exact component={Browse}/>
            <Route path='/profile/:id' exact component={Profile}/>
          </Switch>
        </div>
      </Router>
    </div>)
}

export default App
