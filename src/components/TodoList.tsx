import React from 'react';
import { useForm } from 'react-hook-form';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { todoState } from './atoms';
import CreateToDos from './CreateToDos';
import ToDo from './ToDo';

const TodoList = () => {
  const toDos = useRecoilValue(todoState);

  return (
    <div>
      <h1>ToDo List</h1>
      <hr />
      <CreateToDos />
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
