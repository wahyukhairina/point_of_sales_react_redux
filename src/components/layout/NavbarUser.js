import React, { Component } from 'react'
import AddUser from '../modals/AddUser'

const Navbar = () => {
  return (
    <nav
      className='navbar navbar-light' style={{
        backgroundColor: '#DB7093	'
      }}
    >
      <h4>User List</h4>
      <a className='fa fa-plus fa-2x' title='Add User' style={{ color: 'grey' }} href='#' />
    </nav>
  )
}

export default Navbar
