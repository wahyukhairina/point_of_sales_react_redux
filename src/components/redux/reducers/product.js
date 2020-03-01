const intialState = {
  products: []
}

const product = (state = intialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_PENDING':
      return {
        ...state
      }
    case 'GET_PRODUCTS_REJECTED' :
      return {
        ...state
      }
    case 'GET_PRODUCTS_FULFILLED':
      return {
        ...state,
        products: action.payload.data.result
      }
    default:
      return state
  }
}

export default product
