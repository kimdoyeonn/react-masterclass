import React from 'react';
import { useSetRecoilState } from 'recoil';
import { Categories, IToDo, todoState } from './atoms';

const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(todoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldTodos) => {
      const targetIndex = oldTodos.findIndex((todo) => todo.id === id);
      const oldToDo = oldTodos[targetIndex];
      const newToDo = { ...oldToDo, category: name as any };
      return [
        ...oldTodos.slice(0, targetIndex),
        newToDo,
        ...oldTodos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      {text}
      {category !== Categories.DOING && (
        <button name={Categories.DOING + ''} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO + ''} onClick={onClick}>
          Todo
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE + ''} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
};

export default ToDo;
