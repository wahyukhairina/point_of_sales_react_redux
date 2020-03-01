import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import Home from './components/home/Home';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component = {Home} />
      </Router>
    </Provider>
  );
}

export default App;
