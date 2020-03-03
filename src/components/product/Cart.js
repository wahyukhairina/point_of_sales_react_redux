import React, { Component } from 'react'
import CartItem from './CartItem'
import { connect } from 'react-redux'

class Cart extends Component {
  constructor (props) {
    super(props)

    this.state = {
      cart: []
    }
  }

  render () {
    const { cart } = this.props
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

const mapStateToProps = (state) => {

  return {
    cart: state.cart.cart
  }
}
export default connect(mapStateToProps)(Cart)
