const initialState = {
  cart: []
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART':
    //   console.log(action.payload)
      const newCart = [...state.cart, action.payload]
      return {
        ...state,
        cart: newCart
      }
    default:
      return state
  }
}

export default cart
