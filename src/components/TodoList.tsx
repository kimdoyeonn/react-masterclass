import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoSelector, todoState } from './atoms';
import CreateToDos from './CreateToDos';
import ToDo from './ToDo';

const TodoList = () => {
  const [todo, doing, done] = useRecoilValue(todoSelector);

  return (
    <div>
      <h1>ToDo List</h1>
      <hr />
      <CreateToDos />
      <h3>TODO</h3>
      <ul>
        {todo.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
      <hr />
      <h3>DOING</h3>
      <ul>
        {doing.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
      <hr />
      <h3>DONE</h3>
      <ul>
        {done.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
