import React from 'react';
import ReactDOM from 'react-dom';
import App from '../js/views/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
