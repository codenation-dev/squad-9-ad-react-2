import React from 'react';
import Sidebar from './Sidebar';
import { Route } from 'react-router-dom';
import User from './Users';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './containers/Home';
import Paginacao from './Repositorio';
import NavBar from './Nav';

function App() {
  return (
    <Provider store={store}>
      <>
        <Sidebar />
        <Route exact path='/' component={NavBar} />
        <div className='m-5'>
          <Route path='/:query' exact component={User} />
        </div>
        <Route path='/repositories/:query' exact component={Paginacao} />
      </>
    </Provider>
  );
}

export default App;
