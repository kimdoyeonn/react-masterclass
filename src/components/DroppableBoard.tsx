import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import DraggableCard from './DraggableCard';

const Wrapper = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;

interface IBoardProps {
  toDos: string[];
  droppableId: string;
}

function DrappableBoard({ toDos, droppableId }: IBoardProps) {
  return <Droppable droppableId={droppableId}>
    {(magic) => (
      <Wrapper ref={magic.innerRef} {...magic.droppableProps}>
        {toDos.map((toDo, index) => (
          <DraggableCard toDo={toDo} index={index} key={toDo} />
        ))}
        {magic.placeholder}
      </Wrapper>
    )}
  </Droppable>;
}

export default DrappableBoard;
