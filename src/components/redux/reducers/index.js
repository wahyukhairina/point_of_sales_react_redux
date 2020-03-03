import { combineReducers } from 'redux'
import products from './product'
import user from './user'
import cart from './cart'

export default combineReducers({
  products,
  user
  // ,
  // cart
})
