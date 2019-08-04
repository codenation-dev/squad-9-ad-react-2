import React from 'react';
import logoGithub from '../../images/git-img.png';
import { Container, GithubLogo } from './styles';

const Home = () => {
  return (
    <Container>
      <GithubLogo src={logoGithub} alt='github-logo' />
    </Container>
  );
};

export default Home;
