import { IToDo } from './atoms';

const ToDo = ({ text }: IToDo) => {
  return (
    <li>
      {text}
      <button>Doing</button>
      <button>Todo</button>
      <button>Done</button>
    </li>
  );
};

export default ToDo;
