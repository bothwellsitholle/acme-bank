import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './store/AuthContext';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <Router>
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
  </Router>,
  document.getElementById('root')
);

