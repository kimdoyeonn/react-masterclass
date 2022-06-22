import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

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

const TodoList = () => {
  const { register, watch } = useForm();
  console.log(watch());

  return (
    <div>
      <form>
        <input {...register('email')} type='text' placeholder='email' />
        <input {...register('firstName')} type='text' placeholder='firstName' />
        <input {...register('lastName')} type='text' placeholder='lastName' />
        <input {...register('username')} type='text' placeholder='username' />
        <input {...register('password')} type='text' placeholder='password' />
        <input {...register('passwordConfirm')} type='text' placeholder='passwordConfirm' />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoList;
