// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Home } from './pages';
import '@appScss';
import { PageLoader } from './components';

export function App() {
  return (
    <>
      <PageLoader />
      <Home />
    </>
  );
}

export default App;
