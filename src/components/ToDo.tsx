import { useSetRecoilState } from 'recoil';
import { IToDo, todoState } from './atoms';

const ToDo = ({ text, category, id }: IToDo) => {
  const setToDo = useSetRecoilState(todoState);
  const onClick = (newCategory: IToDo['category']) => {
    console.log('I wanna go to ', newCategory);
  };
  return (
    <li>
      {text}
      {category !== 'DOING' && (
        <button onClick={() => onClick('DOING')}>Doing</button>
      )}
      {category !== 'TO_DO' && (
        <button onClick={() => onClick('TO_DO')}>Todo</button>
      )}
      {category !== 'DONE' && (
        <button onClick={() => onClick('DONE')}>Done</button>
      )}
    </li>
  );
};

export default ToDo;
