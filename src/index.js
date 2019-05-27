import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './config/store';
import history from './config/history';
import { applicationInit } from './reducers/app';
import muiTheme from './styles/theme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
store.dispatch(applicationInit())

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <Router history={history}>
        <MuiThemeProvider theme={muiTheme}>
            <App />
        </MuiThemeProvider>
      </Router>
    </Provider>
  </React.Fragment>      
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
