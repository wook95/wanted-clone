import React from 'react';
import styled from 'styled-components';
import LinkList from './LinkList';
import MainLogo from './MainLogo';
import UserInformation from './UserInformation';

function TopNav() {
  return (
    <Container>
      <Inner>
        <MainLogo />
        <LinkList />
        <UserInformation />
      </Inner>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
`;

const Inner = styled.nav`
  position: relative;
  ${({ theme }) => theme.wrapper};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default TopNav;
