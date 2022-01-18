import React from 'react';
import styled from 'styled-components';
import alert from '../../assets/images/icon-bell.png';
import magnify from '../../assets/images/icon-magnifyGlass.png';
import unnamed from '../../assets/images/unnamed.png';

function UserInformation() {
  return (
    <Container>
      <MagnifyButton>
        <MagnifyGlass />
      </MagnifyButton>
      <AlertButton>
        <Alert />
      </AlertButton>
      <UserButton>
        <Unnamed />
      </UserButton>
      <Separator>|</Separator>
      <RoundButton>기업 서비스</RoundButton>
    </Container>
  );
}

const Container = styled.aside`
  display: flex;
  align-items: center;
`;

const AlertButton = styled.button`
  padding: 0 10px;
  margin-top: 5px;
  background-color: #fff;
  border: none;
`;

const Alert = styled.img.attrs(() => ({
  src: `${alert}`,
  alt: 'alert',
}))`
  width: 18px;
  height: 18px;
`;

const MagnifyButton = styled.button`
  padding: 0 10px;
  margin-top: 5px;
  background-color: #fff;
  border: none;
`;

const MagnifyGlass = styled.img.attrs(() => ({
  src: `${magnify}`,
  alt: 'magnify glass',
}))`
  width: 18px;
  height: 18px;
`;

const UserButton = styled.button`
  margin: 0 10px;
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  border-radius: 100%;
`;

const Unnamed = styled.img.attrs(() => ({
  src: `${unnamed}`,
  alt: 'user icon',
}))`
  width: 28px;
  border-radius: 14px;
  border: 1px solid #fff;
`;

const Separator = styled.span`
  margin: 0 20px;
  color: ${({ theme }) => theme.colors.gray_3};
`;

const RoundButton = styled.button`
  /* display: block; */
  height: 30px;
  padding: 0 10px;
  border: 1px solid #ccc;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray_1};
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  font-size: 13px;
  font-weight: 400;
  line-height: 30px;
`;

export default UserInformation;
