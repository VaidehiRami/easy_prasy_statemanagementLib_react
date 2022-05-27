import React,{ Fragment, useEffect } from 'react';
import { useStoreActions, useStoreState } from "easy-peasy";
import TODOItem from './TODOItem';


const TODO = () => {
    const todos = useStoreState(state => state.todos);
    const fetchTodos = useStoreActions(actions => actions.fetchTodos);

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <Fragment>
    <h1>Todos</h1>
    <p>Click todo item to toggle completed</p>
    <hr />
    {todos.map(todo => (
      <TODOItem todo={todo} key={todo.id} />
    ))}
  </Fragment>
  );
}

export default TODO