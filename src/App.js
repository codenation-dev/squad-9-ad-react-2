import React from 'react';
import Sidebar from './Sidebar';
import NavBar from './Nav';
import { Route } from 'react-router-dom';
import User from './Users';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './containers/Home/Home';

function App() {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <Sidebar />
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/:nameUser' exact component={User} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
