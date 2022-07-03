import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { categoryState, todoSelector, todoState } from './atoms';
import CreateToDos from './CreateToDos';
import ToDo from './ToDo';

const TodoList = () => {
  const toDos = useRecoilValue(todoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value="TO_DO">TO_DO</option>
        <option value="DOING">DOING</option>
        <option value="DONE">DONE</option>
      </select>
      <CreateToDos />
      {toDos.map(toDo => <ToDo key={toDo.id} {...toDo} />)}
    </div>
  );
};

export default TodoList;
