import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { TodoContextProvider } from './context/todo';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </React.StrictMode>
);
