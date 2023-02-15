import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import {
  Categories,
  categoriesState,
  categoryState,
  toDoSelector,
} from '../atoms';
import CreateCategory from './CreateCategory';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);
  const categories = useRecoilValue(categoriesState);
  const [category, setCateogry] = useRecoilState(categoryState);
  console.log(JSON.parse(localStorage.getItem('toDos') ?? '[]'));
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setCateogry(value as Categories);
  };
  return (
    <Container>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <CreateCategory />
      <select value={category} onInput={onInput}>
        {categories.map((category) => (
          <option value={category.id} key={category.id}>
            {category.text}
          </option>
        ))}
      </select>
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
    </Container>
  );
};

export default ToDoList;

const Container = styled.div`
  background-color: ${(props) => props.theme.text.secondary};
`;
