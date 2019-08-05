import React from 'react';
import logoGithub from '../../images/git-img.png';
import { Container, GithubLogo } from './styles';
import Navbar from '../../Nav';

const Home = () => {
  return (
    <Container>
      <Navbar />
      {/* <GithubLogo src={logoGithub} alt='github-logo' /> */}
    </Container>
  );
};

export default Home;
