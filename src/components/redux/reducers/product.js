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
    case 'POST_PRODUCTS_PENDING':
      return {
        ...state
      }
    case 'POST_PRODUCTS_REJECTED' :
      return {
        ...state
      }
    case 'POST_PRODUCTS_FULFILLED':
      state.products.unshift(action.payload.data.result)
      return {
        ...state,
        products: action.payload.data.result
      }
    case 'DELETE_PRODUCTS_PENDING':
      return {
        ...state
      }
    case 'DELETE_PRODUCTS_REJECTED' :
      return {
        ...state
      }
    case 'DELETE_PRODUCTS_FULFILLED':
      return {
        ...state,
        products: action.payload.data.result
      }
    default:
      return state
  }
}

export default product
