import React from 'react';
import TopNav from './components/TopNav';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <TopNav />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
`;

export default App;
