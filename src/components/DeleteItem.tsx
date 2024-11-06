import { Droppable } from "@hello-pangea/dnd";
import { FaTrashAlt } from "react-icons/fa";
import styled from "styled-components";

const IconWrapper = styled.div<{ $isDraggingOver: boolean }>`
  position: fixed;
  right: 20px;
  bottom: 20px;
  color: ${(props) => (props.$isDraggingOver ? "pink" : "green")};
`;

function DeleteItem() {
  return (
    <Droppable droppableId="trashcan" type="card">
      {(provided, snapshot) => (
        <>
          <IconWrapper
            ref={provided.innerRef}
            {...provided.droppableProps}
            $isDraggingOver={snapshot.isDraggingOver}
          >
            <FaTrashAlt size={40} />
          </IconWrapper>
          {provided.placeholder}
        </>
      )}
    </Droppable>
  );
}

export default DeleteItem;
