import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import TodoApp from './containers/TodoApp';
import * as serviceWorker from './serviceWorker';

import todo from './redux/reducers/todosReducer';

import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import  {logger} from 'redux-logger'
import {Provider} from 'react-redux';

const rootReducer = combineReducers({
  todos : todo,
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)) )

ReactDOM.render(



  <React.StrictMode>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
