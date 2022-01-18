import React from 'react';
import styled from 'styled-components';
import hamburger from '../../assets/topNavImages/icon-menu.png';
import logo from '../../assets/topNavImages/logo-font.png';

function MainLogo() {
  return (
    <Container>
      <HamburgerIcon />
      <LogoIcon />
    </Container>
  );
}

const Container = styled.div``;

const HamburgerIcon = styled.img.attrs(() => ({
  src: `${hamburger}`,
  alt: 'menu',
}))`
  margin: -2px 15px 0 0;
  width: auto;
  height: 13.98px;
  cursor: pointer;
`;

const LogoIcon = styled.img.attrs(() => ({
  src: `${logo}`,
  alt: 'logo',
}))`
  width: auto;
  height: 17.5px;
  cursor: pointer;
`;

export default MainLogo;
