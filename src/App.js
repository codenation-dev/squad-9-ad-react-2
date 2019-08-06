import React from 'react';
import Sidebar from './Sidebar';
import NavBar from './Nav';
import { Route } from 'react-router-dom';
import User from './Users';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './containers/Home';
import Paginacao from './Repositorio';
import Bars from './Bars';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <Provider store={store}>
      <Container fluid={true}>
        <Bars>
          <Route exact path='/' component={Home} />
          <div className='m-5'>
            <Route path='/:nameUser' exact component={User} />
          </div>

          <Route path='/repositories/:repoQuery' exact component={Paginacao} />
        </Bars>
        {/*<Row>*/}
        {/*<Col md={12} style={{background: 'red'}}>Nav</Col>*/}
        {/*</Row>*/}
        {/* <Row>
          <div style={{ height: '100%', position: 'absolute' }}>
            <Sidebar />
          </div>
        </Row> */}
      </Container>
    </Provider>
  );
}

export default App;
