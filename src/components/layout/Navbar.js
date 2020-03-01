import React from 'react'

const Navbar = () => {
  return (
    <nav
      className='navbar navbar-light' style={{
        backgroundColor: '#DB7093	'
      }}
    >
      <center> <h2 style={{ textAlign: 'center' }} /></center>

      <form className='form-inline'>
        <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
      </form>
    </nav>
  )
}

export default Navbar
