import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { toDoState } from './atoms';
import DrappableBoard, { Form } from './components/DroppableBoard';

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const Board = styled.div``;

interface IForm {
  board: string;
}

function App() {
  const { register, setValue, handleSubmit } = useForm<IForm>();

  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => {
    const { source, destination, draggableId } = info;
    if (!destination) return;
    setToDos((allBoards) => {
      if (destination.droppableId === source.droppableId) {
        const copyToDos = [...allBoards[source.droppableId]];
        const task = copyToDos[source.index];
        copyToDos.splice(source.index, 1);
        copyToDos.splice(destination.index, 0, task);
        return { ...allBoards, [destination.droppableId]: copyToDos };
      } else {
        const copySourceToDos = [...allBoards[source.droppableId]];
        const task = copySourceToDos[source.index];
        copySourceToDos.splice(source.index, 1);
        const copyDestinationToDos = [...allBoards[destination.droppableId]];
        copyDestinationToDos.splice(destination.index, 0, task);

        return {
          ...allBoards,
          [source.droppableId]: copySourceToDos,
          [destination.droppableId]: copyDestinationToDos,
        };
      }
    });
  };

  const onValid = ({ board }: {board: string}) => {
    setToDos(oldToDos => {
      return {
        ...oldToDos,
        [board]: [],
      }
    })
    setValue('board', '');
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register('board', { required: true })}
          type='text'
          placeholder='Write board name and enter'
          />
      </Form>
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            {Object.keys(toDos).map((key) => (
              <DrappableBoard toDos={toDos[key]} boardId={key} key={key} />
              ))}
            <Board>
              Drag here to delete
            </Board>
          </Boards>
        </Wrapper>
      </DragDropContext>
    </>
  );
}

export default App;
