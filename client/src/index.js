import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthWrapper } from './context';

ReactDOM.render(
  <React.StrictMode>
    <AuthWrapper>
      <App />
    </AuthWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
