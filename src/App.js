import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './components/redux/store'
import Home from './components/home/Home'
import Login from './components/auth/Login';
import User from './components/user/User'
import Product from './components/product/Product'
import Category from './components/category/ListCategory'

function App () {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/login' component={Login} />
        <Route exact path='/' component = {Home} />
        <Route path='/user' component={User} />
        <Route path='/product' component={Product} />
        <Route path='/category' component={Category} />
      </Router>
    </Provider>
  )
}

export default App
