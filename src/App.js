import React from 'react';
import styled from 'styled-components';

function App() {
  return <Test>app</Test>;
}

const Test = styled.div`
  background-color: tomato;
  ${({ theme }) => theme.wrapper};
`;

export default App;
