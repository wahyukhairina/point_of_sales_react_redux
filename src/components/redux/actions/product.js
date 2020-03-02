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
    type: 'POST_PRODUCTS',
    payload: axios.post('http://localhost:8006/product', data)
  }
}

export const deleteProduct = (id) => {
  return {
    type: 'DELETE_PRODUCTS',
    payload: axios.delete(`http://localhost:8006/product/${id}`)
  }
}

export const updateProduct = (productId, data) => {
  return {
    type: 'UPDATE_PRODUCTS',
    payload: axios({
      method: 'PATCH',
      url: `http://localhost:8006/product/${productId}`,
      data: data
    })
   }
}

export const searchProduct = (name) => {
  return {
    type: 'SEARCH_PRODUCTS',
    payload: axios.get(`http://localhost:8006/product/searchName${name}`)
  }
}

export const getProductsDetail = (id) => {
  return {
    type: 'GET_DETAIL',
    payload: axios.get(`http://localhost:8006/${id}`)
  }
}
