import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { CssBaseline } from '@material-ui/core'

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline >
      <App />
    </CssBaseline>
  </React.StrictMode>,
  document.getElementById('root')
);