// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Home } from './pages';
import 'appScss';
import { PageLoader } from './components';
import { useEffect, useState } from 'react';

export function App() {
  return (
    <>
      <PageLoader />
      <Home />
    </>
  );
}

export default App;
