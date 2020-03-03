import React from 'react'

const CartItem = ({ cart }) => {
  return (
    <>
      <div className='row'>
        <div className='col-md-4'>
          <div><img style={{ height: '80px', width: '80px', marginLeft: '-14px' }} src={cart.image} /></div>

        </div>
        <div className='col-md-4'>
          <div className='row' style={{ marginLeft: '-15px' }}>{cart.name}</div>
          <div className='row' style={{ marginLeft: '-30px' }}>
            <div className='col-md-3'><button>-  </button></div>
            <div className='col-md-3' style={{ marginLeft: '10px'}}> {cart.qty} </div>
            <div className='col-md-3'><button>+</button></div>

          </div>
        </div>
        <div className='col-md-4'>
       {cart.price}
        </div>
      </div>

    </>
  )
}

export default CartItem
