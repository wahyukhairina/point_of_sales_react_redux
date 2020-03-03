import React, { Component, Fragment } from 'react'
import ProductItem from './ProductItem'
import Navbar from '../layout/Navbar'
import Sidebar from '../layout/Sidebar'
import AddProduct from '../modals/AddProduct'
import Cart from './Cart'


class Product extends Component {

  state = {
    show : false, 
    cart : []
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

onSetCart = (products) => {
  this.setState({
    cart : products
  })
}
  render () {
    const { cart } = this.state
    return (
     <>
        <div className='row'>
          <div className='col-md-9'>
            <Navbar />
            <div className='row'>
              <div className='col-md-1'>
                <Sidebar />
              </div>
              <div className='col-md-11'>
                <div className='row'>
                  <ProductItem setCart = {this.onSetCart} />
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
    ini cart
    <Cart cart = { cart } />
          </div>
        </div>
        <div className='row'>
          <a onClick={this.onShow} title='Add Product' style={{ marginTop: '10px', marginLeft: '800px', color: 'grey' }} className='fa fa-plus fa-2x' href='#' />
        </div>
        <AddProduct show={this.state.show} onHandleClose={this.onHandleClose} />
        
      </>
    )
  }
}

export default Product
