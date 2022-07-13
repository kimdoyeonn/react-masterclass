import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Card = styled.div<{isDragging: boolean}>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) => props.isDragging ? "#74b9ff" : props.theme.cardColor};
`;

interface ICardProps {
  toDo: string;
  index: number;
}

function DraggableCard({ toDo, index }: ICardProps) {
  return (
    <Draggable draggableId={toDo} index={index} key={toDo}>
      {(provide, info) => (
        <Card
          ref={provide.innerRef}
          isDragging={info.isDragging}
          {...provide.dragHandleProps}
          {...provide.draggableProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
