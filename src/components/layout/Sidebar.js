import React, { Component } from 'react'

class Sidebar extends Component {
  render () {
    return (
      <ul className='nav flex-column'>
        <a className='fa fa-book fa-2x' title="Menu" style={{ marginTop: '20px', marginLeft: '20px', color: 'grey' }} href='/product' />
        <li className='nav-item'>
          <a className='fa fa-list-alt fa-2x' title="Category" style={{ marginTop: '20px', marginLeft: '20px', color: 'grey' }} href='#' />
        </li>
        <li className='nav-item'>
          <a className='fa fa-user fa-2x' title="User" style={{ marginTop: '20px', marginLeft: '20px', color: 'grey' }} href='/user' />
        </li>
        <li className='nav-item'>
          <a className='fa fa-file-text fa-2x' title="History" style={{ marginTop: '20px', marginLeft: '20px', color: 'grey' }} href='#' />
        </li>
      </ul>
    )
  }
}

export default Sidebar
