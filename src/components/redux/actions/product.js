import axios from 'axios'

export const getProducts = () => {
  return {
    type: 'GET_PRODUCTS',
    payload: axios({
      method: 'GET',
      url: 'http://localhost:8006/product'
    })
  }
}

export const postProduct = (data) => {
  return {
    type: 'POST_BOOK',
    payload: axios({
      method: 'POST',
      url: 'http:localhost:8006/product',
      data: data
    })
  }
}