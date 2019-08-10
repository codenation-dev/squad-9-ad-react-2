import React from 'react';
// import { Container } from './styles';
// import Navbar from '../../Nav';
// import NavBar from '../../App';
import logo from '../../images/git-img.png';

const Home = () => {
  const { innerWidth } = window;
  return (
    <div
      style={{
        // textAlign: 'center',
        // width: innerWidth < 500 ? 'inherit' : '50%',
        // marginTop: windowWidth < 500 ? '30%' : '15%',
        // marginLeft: 'auto',
        // marginRight: 'auto',
        // marginTop: '10%',
        position: 'absolute',
        display: 'flex',
        top: '20%',
        width: '100%',
        justifyContent: 'center',
        animation: 'fadeIn ease-in-out 1.5s'
      }}
    >
      <div>
        <img
          src={logo}
          width={innerWidth > 500 ? '350px' : '280px'}
          alt='github-logo'
        />
      </div>
    </div>
  );
};

export default Home;
