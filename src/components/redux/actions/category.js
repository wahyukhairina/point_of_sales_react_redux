import axios from 'axios'

export const getCategory = () => {
  return {
    type: 'GET_CATEGORY',
    payload: axios({
      method: 'GET',
      url: 'http://localhost:8006/category'
    })
  }
}

export const postCategory = (data) => {
  return {
    type: 'POST_CATEGORY',
    payload: axios.post('http://localhost:8006/category', data)
  }
}
