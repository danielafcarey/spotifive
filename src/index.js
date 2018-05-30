import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './App/App';
import { rootReducer } from './reducers';
import * as firebase from 'firebase';
import { config } from './firebase/firebaseConfig';
import { 
  listenForSubmitUpdateUser,
  listenForSubmitUpdateSearch,
  listenForSubmitUpdateArtist
} from './sagas';
const sagaMiddleware = createSagaMiddleware();

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools, applyMiddleware(sagaMiddleware));

firebase.initializeApp(config);
sagaMiddleware.run(listenForSubmitUpdateUser);
sagaMiddleware.run(listenForSubmitUpdateSearch);
sagaMiddleware.run(listenForSubmitUpdateArtist);

const root = (
  <Provider store={ store }>
    <BrowserRouter>
      <App /> 
    </BrowserRouter> 
  </Provider>
)

ReactDOM.render(root, document.getElementById('root'));
