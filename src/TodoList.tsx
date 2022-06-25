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

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  passwordConfirm: string;
  extraError?: string;
}

const TodoList = () => {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: '@naver.com',
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      passwordConfirm: '',
    },
  });
  const onValid = (data: IForm) => {
    console.log('valid', data);
    if (data.password !== data.passwordConfirm) {
      setError(
        'passwordConfirm',
        {
          message: 'Password are not the same.',
        },
        {
          shouldFocus: true,
        }
      );
    }
    setError('extraError', {
      message: 'Server offline',
    });
  };
  console.log(errors);
  return (
    <div>
      <form
        onSubmit={handleSubmit(onValid)}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <input
          {...register('email', {
            required: 'email is required',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver\.com$/,
              message: 'only naver.com emails allowed',
            },
          })}
          type='text'
          placeholder='email'
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register('firstName', {
            required: 'write here',
            validate: {
              noNico: (value) =>
                value.includes('nico') ? 'no nicos allowed' : true,
              noNick: (value) =>
                value.includes('nick') ? 'no nick allowed' : true,
            },
          })}
          type='text'
          placeholder='firstName'
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register('lastName', { required: 'reqired' })}
          type='text'
          placeholder='lastName'
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register('username', { required: 'reqired' })}
          type='text'
          placeholder='username'
        />
        <span>{errors?.username?.message}</span>
        <input
          {...register('password', {
            required: 'password is required',
            minLength: {
              value: 5,
              message: 'password is too short',
            },
          })}
          type='text'
          placeholder='password'
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register('passwordConfirm', {
            required: 'reqired',
            minLength: 5,
          })}
          type='text'
          placeholder='passwordConfirm'
        />
        <span>{errors?.passwordConfirm?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
};

export default TodoList;
