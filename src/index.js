import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux';
import App from './App'
import configureStore from './store/configureStore';
const store = configureStore(); // You can also pass in an initialState here
console.log(store.getState('myList'));
ReactDOM.render(
      <Provider store={store}>
          <App />
      </Provider>, document.getElementById('root'))


// import React from 'react';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import configureStore from './store/configureStore';
// import ItemList from './components/ItemList';
// const store = configureStore(); // You can also pass in an initialState here
// render(
//     <Provider store={store}>
//         <ItemList />
//     </Provider>,
//     document.getElementById('app')
// );
