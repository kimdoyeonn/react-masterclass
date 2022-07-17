import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { toDoState } from './atoms';
import DrappableBoard, { Form } from './components/DroppableBoard';

interface IArea {
  isDraggingOver: boolean;
}

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const Area = styled.div<IArea>`
  height: 2rem;
  width: 100%;
  background-color: ${props => props.isDraggingOver ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.3)'};
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
      let newBoards = {};
      if (destination.droppableId === source.droppableId) {
        const copyToDos = [...allBoards[source.droppableId]];
        const task = copyToDos[source.index];
        copyToDos.splice(source.index, 1);
        copyToDos.splice(destination.index, 0, task);
        newBoards = { ...allBoards, [destination.droppableId]: copyToDos };
      } else if (destination.droppableId === 'delete') {
        const copyToDos = [...allBoards[source.droppableId]];
        copyToDos.splice(source.index, 1)
        newBoards = { ...allBoards, [source.droppableId]: copyToDos };
      } else {
        const copySourceToDos = [...allBoards[source.droppableId]];
        const task = copySourceToDos[source.index];
        copySourceToDos.splice(source.index, 1);
        const copyDestinationToDos = [...allBoards[destination.droppableId]];
        copyDestinationToDos.splice(destination.index, 0, task);

        newBoards = {
          ...allBoards,
          [source.droppableId]: copySourceToDos,
          [destination.droppableId]: copyDestinationToDos,
        };
      }
      localStorage.setItem('boards', JSON.stringify(newBoards));
      return newBoards;
    });
  };

  const onValid = ({ board }: { board: string }) => {
    setToDos((oldToDos) => {
      const newToDos = {
        ...oldToDos,
        [board]: [],
      };
      localStorage.setItem('boards', JSON.stringify(newToDos));
      return newToDos;
    });
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
          </Boards>
          <Droppable droppableId="delete">
            {(provider, info) => (
              <Area {...provider.droppableProps} isDraggingOver={info.isDraggingOver} ref={provider.innerRef}>
                <div>
                  Drag here to delete
                  {provider.placeholder}
                </div>
              </Area>
            )}
          </Droppable>
        </Wrapper>
      </DragDropContext>
    </>
  );
}

export default App;
