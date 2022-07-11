import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { toDoState } from './atoms';
import DrappableBoard from './components/DroppableBoard';

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

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => {
    const { source, destination, draggableId } = info;
    if (!destination) return;
    setToDos((allBoards) => {
      if (destination.droppableId === source.droppableId) {
        const copyToDos = [...allBoards[source.droppableId]];
        copyToDos.splice(source.index, 1);
        copyToDos.splice(destination.index, 0, draggableId);
        return { ...allBoards, [destination.droppableId]: copyToDos };
      } else {
        const copySourceToDos = [...allBoards[source.droppableId]];
        copySourceToDos.splice(source.index, 1);
        const copyDestinationToDos = [...allBoards[destination.droppableId]];
        copyDestinationToDos.splice(destination.index, 0, draggableId);

        return {
          ...allBoards,
          [source.droppableId]: copySourceToDos,
          [destination.droppableId]: copyDestinationToDos,
        };
      }
    });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((key) => (
            <DrappableBoard toDos={toDos[key]} boardId={key} key={key} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
