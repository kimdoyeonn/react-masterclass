import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { todoState } from "./atoms";

interface IForm {
  toDo: string;
}

const CreateToDos = () => {
  const setToDos = useSetRecoilState(todoState);
  const { setValue, register, handleSubmit } = useForm<IForm>();

  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: 'TO_DO' },
      ...oldToDos,
    ]);
    setValue('toDo', '');
  };

  return       <form onSubmit={handleSubmit(handleValid)}>
  <input
    {...register('toDo', {
      required: 'Please write a To Do.',
    })}
    placeholder='Write a to do'
  />
  <button>Add</button>
</form>;
}

export default CreateToDos;