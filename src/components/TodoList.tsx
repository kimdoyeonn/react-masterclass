import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { atom, useRecoilState } from 'recoil';

// const TodoList = () => {
//   const [todo, setTodo] = useState('');
//   const [todoError, setTodoError] = useState('');

//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setTodoError('');
//     setTodo(value);
//   };

//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setTodoError('to do should be longer than 10');
//     console.log(todo);
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={todo} placeholder='Write a to do' />
//         <button>Add</button>
//         {todo.length > 10 ? todoError : null}
//       </form>
//     </div>
//   );
// };

interface IForm {
  toDo: string;
}

interface IToDo {
  text: string;
  category: 'TO_DO' | 'DOING' | 'DONE';
  id: number;
}

const todoState = atom<IToDo[]>({
  key: 'toDO',
  default: [],
});

const TodoList = () => {
  const [toDos, setToDos] = useRecoilState(todoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: 'TO_DO' },
      ...oldToDos,
    ]);
    setValue('toDo', '');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register('toDo', {
            required: 'Please write a To Do.',
          })}
          placeholder='Write a to do'
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
