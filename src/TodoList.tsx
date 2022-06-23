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
  const { register, watch, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form
        onSubmit={handleSubmit(onValid)}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <input
          {...register('email', { required: 'email is required' })}
          type='text'
          placeholder='email'
        />
        <input
          {...register('firstName', { required: true })}
          type='text'
          placeholder='firstName'
        />
        <input
          {...register('lastName', { required: true })}
          type='text'
          placeholder='lastName'
        />
        <input
          {...register('username', { required: true })}
          type='text'
          placeholder='username'
        />
        <input
          {...register('password', { required: 'password is required', minLength: {
            value: 5,
            message: 'password is too short',
          } })}
          type='text'
          placeholder='password'
        />
        <input
          {...register('passwordConfirm', { required: true, minLength: 5 })}
          type='text'
          placeholder='passwordConfirm'
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoList;
