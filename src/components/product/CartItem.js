import React, { Component } from 'react'

class CartItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      quantity: 0
    }
  }

 addQuantity = (cart) => {
 cart.qty = cart.qty + 1
 this.setState ({
     cart : cart
 })
 }

 reduceQuantity = (cart) => {
     if (cart.qty > 1 ){
    cart.qty = cart.qty - 1
    this.setState ({
        cart : cart
    })
}
    }

  render () {
    const { cart } = this.props
    const quantity = cart.qty
    return (
      <>
        <div className='row'>
          <div className='col-md-4'>
            <div><img style={{ height: '80px', width: '80px', marginLeft: '-14px' }} src={cart.image} /></div>

          </div>
          <div className='col-md-4'>
            <div className='row' style={{ marginLeft: '-15px' }}>{cart.name}</div>
            <div className='row' style={{ marginLeft: '-30px' }}>
              <div className='col-md-3'><button onClick={()=>(this.reduceQuantity(cart))}>-  </button></div>
              <div className='col-md-3' style={{ marginLeft: '10px' }}> {cart.qty} </div>
              <div className='col-md-3'><button onClick={()=>(this.addQuantity(cart))}>+</button></div>

            </div>
          </div>
          <div className='col-md-4'>
            {cart.price}
          </div>
        </div>

      </>
    )
  }
}
export default CartItem
