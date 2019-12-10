import uuid from "uuid/v4";
import React, { createContext, useReducer, useEffect } from "react";
import { todoReducer } from "../reducers/todoReducer";

export const TodoContext = createContext();

const TodoContextProvider = props => {
  const [todos, dispatch] = useReducer(todoReducer, [], () => {
    const localData = localStorage.getItem("todos");
    return localData
      ? JSON.parse(localData)
      : [
          {
            item: "learn to spell",
            dueDate: "2019-12-13",
            completed: false,
            id: uuid()
          },
          {
            item: "play piano",
            dueDate: "2019-12-14",
            completed: false,
            id: uuid()
          },
          {
            item: "run through the trees",
            dueDate: "2019-12-10",
            completed: false,
            id: uuid()
          }
        ];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
