import React from 'react';
import Main from './components/MainComponent'
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore'

const store = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Main />    
    </Provider>
    
  );
}

const logo = {
  uri: 'https://cdn0.iconfinder.com/data/icons/tutor-icon-set/512/Backpack_icon-512.png',
  width: 128,
  height: 128
};
