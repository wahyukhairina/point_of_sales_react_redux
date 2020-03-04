import React, { Component } from 'react'
import Product from '../product/Product'
import { Link } from 'react-router-dom';

class Home extends Component {

  componentDidMount () {
    if (!localStorage.getItem('isAuth')) {
      this.props.history.push('/login')
    }
  }

  onLogout () {
    localStorage.removeItem('user-id')
    localStorage.removeItem('token')
    localStorage.removeItem('isAuth')
    localStorage.removeItem('name')
    localStorage.removeItem('status')
    this.props.history.push('/login')
  }

  render () {
    console.log('render')
    return (
      <>
      <Link to="#" onClick={this.onLogout.bind(this)}>Logout</Link>
      <Product />
      </>
    )
  }
}

export default Home
