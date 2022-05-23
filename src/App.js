import React from 'react';
import {
  Bg,
  Container,
  Heading,
  Loader,
  MainContent,
} from './common';

function App() {
  return (
    <Bg>
      <Container>
        <Heading variant="h1">Hello</Heading>
      </Container>
      <MainContent>
        <Loader />
      </MainContent>
    </Bg>
  );
}

export default App;
