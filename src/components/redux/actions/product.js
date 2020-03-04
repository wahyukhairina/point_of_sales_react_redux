import axios from 'axios'

export const getProducts = () => {
  console.log(localStorage.getItem('token'))
  return {
    type: 'GET_PRODUCTS',
    payload: axios({
      method: 'GET',
      url: 'http://localhost:8006/product',
      headers: {
        authorization: localStorage.getItem('token'),
        'user-id': localStorage.getItem('user-id')
      }
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
    payload: axios.get(`http://localhost:8006/product/?searchName=${name}`, {
      headers: {
        authorization: localStorage.getItem('token'),
        'user-id': localStorage.getItem('user-id')
      }
    })
    
  }
}

export const sortProduct = (type) => {
  return {
    type: 'SORT_PRODUCTS',
    payload: axios.get(`http://localhost:8006/product/?sort=price&type=${type}`, {
      headers: {
        authorization: localStorage.getItem('token'),
        'user-id': localStorage.getItem('user-id')
    }
    }) 
}
}

export const paginationProduct = (page) => {
  return {
    type: 'PAGINATION',
    payload: axios ({
      method: 'GET',
      url: `http://localhost:8006/product/?page=${page}`,
      headers: {
        authorization: localStorage.getItem('token'),
        'user-id': localStorage.getItem('user-id')
      }
    })
  }
}
