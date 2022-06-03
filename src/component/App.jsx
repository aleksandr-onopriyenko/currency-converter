import React from 'react';
import {
  Bg,
  MainContent,
} from '../common';
import { Header } from './index';
import Calculate from './Calculate/Calculate';

function App() {
  return (
    <Bg>
      <Header />
      <MainContent>
        <Calculate />
      </MainContent>
    </Bg>
  );
}

export default App;
