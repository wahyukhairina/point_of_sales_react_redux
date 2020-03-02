import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './components/redux/store'
import Home from './components/home/Home'
// import User from './components/user/User'
// import Category from './components/category/Category'


function App () {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path = '/' component = {Home} />
        {/* <Route path='/user' component={User} />
        <Route path='/category' component={Category} /> */}
      </Router>
    </Provider>
  );
}

export default App
