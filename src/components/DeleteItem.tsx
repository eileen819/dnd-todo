import { Droppable } from "@hello-pangea/dnd";
import { FaTrashAlt } from "react-icons/fa";
import styled from "styled-components";

const TrashIcon = styled.div<{ $active: boolean }>`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.$active ? "#f81717" : "#636e72")};
  transform: scale(${(props) => (props.$active ? 2 : 1)});
  z-index: 10;
  transition: color 0.5s ease, transform 0.5s ease;
`;

const HitBox = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  z-index: 10;
`;

function DeleteItem() {
  return (
    <>
      <Droppable droppableId="trashcan-board" type="board">
        {(pBoard, sBoard) => (
          <HitBox ref={pBoard.innerRef} {...pBoard.droppableProps}>
            {pBoard.placeholder}

            <Droppable droppableId="trashcan-card" type="card">
              {(pCard, sCard) => {
                const active = sBoard.isDraggingOver || sCard.isDraggingOver;
                return (
                  <>
                    <HitBox ref={pCard.innerRef} {...pCard.droppableProps}>
                      {pCard.placeholder}
                    </HitBox>

                    <TrashIcon $active={active}>
                      <FaTrashAlt size={40} />
                    </TrashIcon>
                  </>
                );
              }}
            </Droppable>
          </HitBox>
        )}
      </Droppable>
    </>
  );
}

export default DeleteItem;
