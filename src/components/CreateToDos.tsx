import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryState, todoState } from './atoms';

interface IForm {
  toDo: string;
}

const CreateToDos = () => {
  const setToDos = useSetRecoilState(todoState);
  const { setValue, register, handleSubmit } = useForm<IForm>();
  const category = useRecoilValue(categoryState);
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue('toDo', '');
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register('toDo', {
          required: 'Please write a To Do.',
        })}
        placeholder='Write a to do'
      />
      <button>Add</button>
    </form>
  );
};

export default CreateToDos;
