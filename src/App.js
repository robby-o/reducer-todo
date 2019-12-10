import React from "react";
import TodoContextProvider from "./contexts/TodoContext";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <TodoList />
        <TodoForm />
      </TodoContextProvider>
    </div>
  );
}

export default App;
