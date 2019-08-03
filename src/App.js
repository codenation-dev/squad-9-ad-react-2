import React from 'react';
import GlobalStyle from "./StyleGlobal/GlobalStyle";
import {Timeline} from "./Dashboard";
import NavBar from "./Nav";
import {Content} from "./Layout/styleLayout";


function App() {
  return (
<div>
      <GlobalStyle/>
          <Content>
              <NavBar/>
          <Timeline/>
      </Content>
</div>


  );
}

export default App;
