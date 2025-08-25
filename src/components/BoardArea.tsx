import { Droppable } from "@hello-pangea/dnd";
import Board from "./Board";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { boardState } from "../atom";
import CreateBoard from "./CreateBoard";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  width: 100%;
  gap: 30px;
  background-color: #dfbbfc;
  overflow: hidden;
  padding: 50px 20px;
  border-radius: 30px;
  border: 1px solid #fff9bf;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
`;

function BoardArea() {
  const boards = useRecoilValue(boardState);

  return (
    <Droppable droppableId="boards" type="board" direction="horizontal">
      {(provided) => (
        <>
          <Wrapper ref={provided.innerRef} {...provided.droppableProps}>
            {boards.map((boardId, index) => (
              <Board key={boardId} boardId={boardId} index={index} />
            ))}
            {provided.placeholder}
            <CreateBoard />
          </Wrapper>
        </>
      )}
    </Droppable>
  );
}

export default BoardArea;
