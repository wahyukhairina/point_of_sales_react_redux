import React, { Component, Fragment } from 'react'
import CartItem from './CartItem'

class Cart extends Component {
  constructor (props) {
    super(props)

    this.state = {
      cart: []
    }
  }

  componentWillReceiveProps ({ cart }) {
    this.state.cart.push(cart)

    this.setState({
      cart: this.state.cart
    })
  }

  render () {
    const { cart } = this.state
    const ItemCart = cart.map((cart) => {
      return (
        <CartItem cart={cart} key={cart.id} />
      )
    })

    return (
      <>
        <div className='container'>
          {ItemCart}
        </div>
      </>
    )
  }
}

export default Cart
