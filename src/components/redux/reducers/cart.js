const intialState = {
  cart: []
}

const cart = (state = intialState, action) => {
  switch (action.type) {
    case 'ADD_CART_FULFILLED':
      console.log(action.payload)
      const newCart = [...state.cart, action.payload.data]
      return {
        ...state,
        cart: newCart
      }
  }
}

export default cart
