import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import { Provider } from 'react-redux'

render(
  <Provider>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root'));
