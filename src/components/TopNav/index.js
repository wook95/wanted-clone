import React from 'react';
import styled from 'styled-components';
import LinkList from './LinkList';
import MainLogo from './MainLogo';
import UserInformation from './UserInformation';

function TopNav() {
  return (
    <Inner>
      <MainLogo />
      <LinkList />
      <UserInformation />
    </Inner>
  );
}

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
