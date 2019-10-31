import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import TestPage from './TestPage';
import HomePage from './HomePage';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Link to="/home">home</Link>
        <Link to="/test">test</Link>
        <Route exact path="/test" component={TestPage} />
        <Route exact path="/home" component={HomePage} />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
