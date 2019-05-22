import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

// action 描述“发生了什么”
// Reducers 根据 action 更新 state
// Store 就是把它们联系到一起的对象，Redux 应用只有一个单一的 store
// 容器中通过dispatch() 将 action 传到 store

const store = createStore(rootReducer)
console.log(store.getState())
ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
