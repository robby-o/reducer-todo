import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoForm = () => {
  const { dispatch } = useContext(TodoContext);
  const [item, setItem] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      todo: {
        item,
        dueDate
      }
    });
    setItem("");
    setDueDate("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="todo..."
          value={item}
          onChange={e => setItem(e.target.value)}
        />
        <label htmlFor="completeBy">Complete by:</label>
        <input
          type="date"
          id="completeBy"
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
        ></input>
        <input type="submit" value="add todo" />
      </form>
      <button
        className="clear-btn"
        onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
      >
        Clear Completed
      </button>
    </>
  );
};

export default TodoForm;
