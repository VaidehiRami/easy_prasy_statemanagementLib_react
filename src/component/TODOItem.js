import React from 'react';
import {useStoreActions } from "easy-peasy";

const TODOItem = ({ todo }) => {
    const { remove, toggle } = useStoreActions(actions => ({
        remove: actions.remove,
        toggle: actions.toggle
      }));
    
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.completed ? "line-through" : "none" }} >
      <span onClick={() => toggle(todo.id)} style={{ cursor: "pointer" }}>
        {todo.title}
      </span>
      <button onClick={() => remove(todo.id)}>
        <i className="bi bi-trash-fill" />
      </button>
    </div>
  );
}

export default TODOItem