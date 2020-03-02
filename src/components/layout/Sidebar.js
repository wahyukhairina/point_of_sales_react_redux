import React, { Component } from 'react'
import AddProduct from '../modals/AddProduct'

class Sidebar extends Component {
  
  state = {
    show : false
  }

  onShow = (e) => {
    this.setState({
        show: true
    })
} 

  onHandleClose = () => {
    this.setState({
        show: false
    })
} 
  render () {
    return (
      <ul className='nav flex-column'>
        <a onClick={this.onShow} title="Add Product" style={{ marginTop: '10px', marginLeft: '15px', color: 'grey' }} className='fa fa-plus fa-2x' href='#' />
        <li className='nav-item'>
          <a className='fa fa-list-alt fa-2x' title="Category" style={{ marginTop: '20px', marginLeft: '12px', color: 'grey' }} href='#' />
        </li>
        <AddProduct show={this.state.show} onHandleClose={this.onHandleClose} />
        <li className='nav-item'>
          <a className='fa fa-user fa-2x' title="User" style={{ marginTop: '20px', marginLeft: '12px', color: 'grey' }} href='#' />
        </li>
        <li className='nav-item'>
          <a className='fa fa-file-text fa-2x' title="History" style={{ marginTop: '20px', marginLeft: '12px', color: 'grey' }} href='#' />
        </li>
      </ul>
    )
  }
}

export default Sidebar
