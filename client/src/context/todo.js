import React, { useState, createContext } from 'react';

export const TodoContext = createContext();

export const TodoContextProvider = (props) => {
  const [todolist, setTodolist] = useState([]);
  const [present, setPresent] = useState(false);
  const [theme, setTheme] = useState('dark');

  return (
    <TodoContext.Provider
      value={{ theme, setTheme, todolist, setTodolist, present, setPresent }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
