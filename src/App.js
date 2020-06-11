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
        <Sidebar />
        <div id='doc-body'>
          <NavBar />

          <Route exact path='/' component={Home} />
          <div className='container'>
            <Route path='/:query' exact component={User} />
          </div>
          <Route path='/repositories/:query' exact component={Paginacao} />
        </div>

    </Provider>
  );
}

export default App;
