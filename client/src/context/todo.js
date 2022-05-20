import React, { useState, createContext } from 'react';

export const TodoContext = createContext();

export const TodoContextProvider = (props) => {
  const [todolist, setTodolist] = useState([]);
  const [theme, setTheme] = useState('dark');

  return (
    <TodoContext.Provider value={{ theme, setTheme, todolist, setTodolist }}>
      {props.children}
    </TodoContext.Provider>
  );
};
