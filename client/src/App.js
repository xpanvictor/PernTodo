import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/home';

import Main from './layout/main';

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
