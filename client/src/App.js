import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './layout/main';

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path='/' element={<h1 className='nav'>Hello world</h1>} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
