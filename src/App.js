import React from 'react';
import {Timeline} from "./Dashboard";
import NavBar from "./Nav";
import {Route} from "react-router-dom";
import User from "./Users";
import {Provider} from "react-redux";
import store from "./redux/store";


function App() {
  return (
    <Provider store={store}>
      <div>
        <NavBar></NavBar>
        <Timeline></Timeline>
        <div>
          <Route path="/:nameUser" exact component={User} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
