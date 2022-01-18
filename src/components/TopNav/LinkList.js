import React from 'react';
import styled from 'styled-components';
import linkData from './linkData';

const LinkList = function () {
  return (
    <Container>
      {linkData.map(list => {
        return (
          <NavItem key={list.id}>
            <NavLink>
              {list.name}
              {list?.special && <SpecialWord>{list.special}</SpecialWord>}
            </NavLink>
          </NavItem>
        );
      })}
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  text-align: center;
`;

const NavItem = styled.li`
  display: inline-block;
  height: inherit;
`;

const NavLink = styled.a.attrs(() => ({
  href: '/',
}))`
  position: relative;
  padding: 15px 15px 15px 15px;
  border-bottom: 3px solid transparent;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.gray_2};
    border-bottom-width: 3px;
    border-bottom-style: solid;
  }
`;

const SpecialWord = styled.div`
  position: absolute;
  top: 13px;
  right: -7px;
  color: #2461d1;
  font-size: 10px;
  font-weight: 400;
`;

export default LinkList;
