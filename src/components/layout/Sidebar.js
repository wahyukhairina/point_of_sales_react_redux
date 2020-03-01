import React from 'react'

const Sidebar = () => {
  return (
    <ul className='nav flex-column'>
      <a style={{ marginTop: '10px', marginLeft: '15px', color: 'grey' }} className='fa fa-plus fa-2x' href='#' />
      <li className='nav-item'>
        <a className='fa fa-list-alt fa-2x' style={{ marginTop: '20px', marginLeft: '12px', color: 'grey' }} href='#' />
      </li>
    </ul>
  )
}

export default Sidebar
