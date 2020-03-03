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
    case 'GET_DETAIL_PENDING':
      return {
        ...state
      }
    case 'GET_DETAIL_REJECTED' :
      return {
        ...state
      }
    case 'GET_DETAIL_FULFILLED':
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
      // console.log(action.payload.data)
      const newDataProduct = [...state.products, action.payload.data.result]
      return {
        ...state,
        products: newDataProduct
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
      const newProductAfterDelete = state.products.filter(products => products.id !== action.payload.data.id)
      return {
        ...state,
        isLoading: false,
        products: newProductAfterDelete
      }
    case 'UPDATE_PRODUCTS_PENDING':
      return {
        ...state
      }
    case 'UPDATE_PRODUCTS_REJECTED' :
      return {
        ...state
      }
    case 'UPDATE_PRODUCTS_FULFILLED':
      const newProductUpdate = state.products.map(products => {
        if (products.id === action.payload.data.id) {
          return action.payload.data
        }
        return products
      })
      return {
        ...state,
        products: newProductUpdate
      }
    case 'SEARCH_PRODUCTS_PENDING':
      return {
        ...state
      }
    case 'SEARCH_PRODUCTS_REJECTED' :
      return {
        ...state
      }
    case 'SEARCH_PRODUCTS_FULFILLED':
      return {
        ...state,
        products: action.payload.data.result
      }
    default:
      return state
  }
}

export default product
