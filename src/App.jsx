import React from 'react';
import {
  Bg,
  Loader,
  MainContent,
} from './common';
import { Header } from './component';

function App() {
  return (
    <Bg>
      <Header />
      <MainContent>
        <Loader />
      </MainContent>
    </Bg>
  );
}

export default App;
