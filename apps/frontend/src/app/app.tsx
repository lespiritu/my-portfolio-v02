// eslint-disable-next-line @typescript-eslint/no-unused-vars


import { Home } from './pages';
import 'appScss';
import { Intro } from './components';

export function App() {
  return (
    <>
      <Intro/>
      <Home message="frontend" />
      <div />
    </>
  );
}

export default App;
