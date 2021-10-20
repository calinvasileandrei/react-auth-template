import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider} from '@chakra-ui/react';
import {Provider} from 'react-redux';
import {store} from 'store/store.config';
import {BrowserRouter} from 'react-router-dom';
import {AuthProvider} from 'providers/auth.provider';

ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider>
          <Provider store={store}>
                  <BrowserRouter>
                      <AuthProvider>
                          <App/>
                      </AuthProvider>
                  </BrowserRouter>
          </Provider>
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
