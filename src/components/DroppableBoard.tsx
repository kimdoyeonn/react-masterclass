import { useRef } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import DraggableCard from './DraggableCard';

const Wrapper = styled.div`
  padding-top: 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

interface IAreaProps {
  isDraggingOver: boolean;
  draggingFromThisWith: boolean;
}
const Area = styled.div<IAreaProps>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? '#b2bec3'
      : props.draggingFromThisWith
      ? '#b2bec3'
      : '#dfe6e9'};
  flex-grow: 1;
  padding: 20px 10px;
  transition: background-color .2s;
`;

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

function DrappableBoard({ toDos, boardId }: IBoardProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const onClick = () => {
    inputRef.current?.focus();
    setTimeout(() => {
      inputRef.current?.blur();
    }, 2000);
  };
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <input ref={inputRef} placeholder="Input Text" />
      <button onClick={onClick}>click me</button>
      <Droppable droppableId={boardId}>
        {(provider, info) => (
          <Area
            ref={provider.innerRef}
            isDraggingOver={info.isDraggingOver}
            draggingFromThisWith={Boolean(info.draggingFromThisWith)}
            {...provider.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggableCard toDo={toDo} index={index} key={toDo} />
            ))}
            {provider.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default DrappableBoard;
