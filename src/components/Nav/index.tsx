import React from 'react';
import pucLogo from '../../assets/puc-goias.svg';
import cine from '../../assets/cine.png';
import { Container, LogoContainer, Link } from './styles';

const Nav: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <img src={cine} alt="Cine" />
        <img src={pucLogo} alt="puc goiás" />
      </LogoContainer>
      <Link href="https://www.pucgoias.edu.br/" target="_blank">
        Visite o site da PUC GOIÁS
      </Link>
    </Container>
  );
};

export default Nav;
