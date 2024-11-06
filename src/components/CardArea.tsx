import { Droppable } from "@hello-pangea/dnd";
import DraggableCard from "./DraggableCard";
import styled from "styled-components";
import { toDoState } from "../atom";
import { useRecoilValue } from "recoil";

interface IAreaProps {
  $isDraggingOver: boolean;
  $draggingFromThisWith: boolean;
}

interface ICardAreaProps {
  boardId: string;
}

const Area = styled.div<IAreaProps>`
  background-color: ${(props) =>
    props.$isDraggingOver
      ? "#C6E7FF"
      : props.$draggingFromThisWith
      ? "#FFE3E3"
      : "transparent"};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
  padding: 10px;
`;

function CardArea({ boardId }: ICardAreaProps) {
  const toDos = useRecoilValue(toDoState);

  return (
    <Droppable droppableId={boardId} type="card">
      {(provided, snapshot) => (
        <Area
          $isDraggingOver={snapshot.isDraggingOver}
          $draggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {toDos[boardId].map((toDo, index) => (
            <DraggableCard
              key={toDo.id}
              toDoId={toDo.id}
              toDoText={toDo.text}
              index={index}
              boardId={boardId}
            />
          ))}
          {provided.placeholder}
        </Area>
      )}
    </Droppable>
  );
}

export default CardArea;
