import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import {store, persistor} from './redux/store/store';
import Navigation from './router/Navigation.jsx';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Navigation />
        </PersistGate> 
      </Provider>
    );
  }
}

export default App;