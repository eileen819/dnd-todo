import { Draggable } from "@hello-pangea/dnd";
import { memo, useState } from "react";
import styled from "styled-components";
import { FaEdit } from "react-icons/fa";
import EditContent from "./EditContent";

const Card = styled.div<{ $isDragging: boolean }>`
  background-color: ${(props) =>
    props.$isDragging ? "#e4f2ff" : props.theme.cardColor};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 5px;
  box-shadow: ${(props) =>
    props.$isDragging ? "0px 2px 5px rgba(0,0,0,0.1)" : "none"};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.span`
  flex-grow: 1;
`;

const EditBtn = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: #546de5;
`;

interface IDraggableCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
  boardId: string;
}

function DraggableCard({
  boardId,
  toDoId,
  toDoText,
  index,
}: IDraggableCardProps) {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <>
      {isEdit && (
        <EditContent
          setIsEdit={setIsEdit}
          boardId={boardId}
          index={toDoId}
          mode="toDo"
          initialValue={toDoText}
        />
      )}
      <Draggable draggableId={toDoId + ""} index={index}>
        {(provided, snapshot) => (
          <Card
            $isDragging={snapshot.isDragging}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Text>{toDoText}</Text>
            <EditBtn onClick={() => setIsEdit(true)}>
              <FaEdit />
            </EditBtn>
          </Card>
        )}
      </Draggable>
    </>
  );
}

export default memo(DraggableCard);
