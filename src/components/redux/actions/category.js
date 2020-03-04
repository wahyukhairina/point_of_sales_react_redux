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
