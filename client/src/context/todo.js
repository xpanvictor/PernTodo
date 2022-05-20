import React, { useState, createContext } from 'react';

export const TodoContext = createContext();

export const TodoContextProvider = (props) => {
  const [todolist, setTodolist] = useState([]);

  return (
    <TodoContext.Provider value={{ todolist, setTodolist }}>
      {props.children}
    </TodoContext.Provider>
  );
};
