import React from 'react';
import TopNav from './components/TopNav';
import styled from 'styled-components';
import Carousel from './components/Carousel';

function App() {
  return (
    <Container>
      <TopNav />
      <Carousel />
    </Container>
  );
}

const Container = styled.div``;

export default App;
