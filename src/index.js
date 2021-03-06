import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './App/App';
import { rootReducer } from './reducers';
import * as firebase from 'firebase';
import { config } from './firebase/firebaseConfig';
import { 
  listenForSubmitUpdateUser,
  listenForSubmitUpdateSearch,
  listenForSubmitUpdateArtist,
  listenForSubmitUpdateSpotifive
} from './sagas';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(sagaMiddleware),
  ),
);

firebase.initializeApp(config);
sagaMiddleware.run(listenForSubmitUpdateUser);
sagaMiddleware.run(listenForSubmitUpdateSearch);
sagaMiddleware.run(listenForSubmitUpdateArtist);
sagaMiddleware.run(listenForSubmitUpdateSpotifive);

const root = (
  <Provider store={ store }>
    <BrowserRouter>
      <App /> 
    </BrowserRouter> 
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
