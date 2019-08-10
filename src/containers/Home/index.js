import React from 'react';
import logo from '../../images/git-img.png';

const Home = () => {
  const { innerWidth } = window;
  return (
    <div
      style={{
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
