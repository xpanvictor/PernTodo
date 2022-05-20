import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TodoContextProvider } from './context/todo';

import Main from './layout/main';

function App() {
  return (
    <BrowserRouter>
      <TodoContextProvider>
        <Main>
          <Routes>
            <Route path='/' element={<h1>Hello world</h1>} />
          </Routes>
        </Main>
      </TodoContextProvider>
    </BrowserRouter>
  );
}

export default App;
