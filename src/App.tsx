import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { boardState, toDoState } from "./atom";
import BoardArea from "./components/BoardArea";
import DeleteItem from "./components/DeleteItem";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: "Source Sans 3", sans-serif;
    font-size: 16px;
    background-color: ${(props) => props.theme.bgColor};
    color: #353b48;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.media.mobile} {
    max-width: 350px;
  }
  @media ${({ theme }) => theme.media.tablet} {
    margin: 0px 20px;
  }
`;

const Title = styled.h1`
  align-self: flex-start;
  font-size: 28px;
  font-weight: 800;
  color: #9f8af3;
  margin-bottom: 20px;

  @media ${({ theme }) => theme.media.mobile} {
    margin-left: 20px;
  }
  @media ${({ theme }) => theme.media.tablet} {
    margin-left: 20px;
  }
`;

const BoardWrapper = styled.div`
  width: 100%;
  position: relative;
`;

function App() {
  const setBoards = useSetRecoilState(boardState);
  const setToDos = useSetRecoilState(toDoState);

  const onDragEnd = (info: DropResult) => {
    const { destination, source, draggableId } = info;

    if (!destination) return;

    // 보드의 재정렬
    if (destination.droppableId === "boards") {
      setBoards((allBoards) => {
        const boardsCopy = [...allBoards];
        boardsCopy.splice(source.index, 1);
        boardsCopy.splice(destination.index, 0, draggableId);
        return boardsCopy;
      });
      return;
    }

    // 보드 및 카드의 삭제
    if (destination.droppableId === "trashcan-board") {
      // 1) 보드스테이트에서 삭제
      setBoards((boards) => {
        const newBoards = boards.filter((_, index) => index !== source.index);
        return newBoards;
      });
      // 2) 해당 보드 이름의 투두 항목 전체 삭제
      setToDos((allBoards) => {
        const BoardCopy = { ...allBoards };
        delete BoardCopy[draggableId];
        return BoardCopy;
      });
      return;
    }
    if (destination.droppableId === "trashcan-card") {
      setToDos((allBoards) => {
        const newToDos = allBoards[source.droppableId].filter(
          (_, index) => index !== source.index
        );
        return { ...allBoards, [source.droppableId]: newToDos };
      });
      return;
    }

    // 같은 보드 안에서 투두아이템 재정렬
    if (destination.droppableId === source.droppableId) {
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        const targetObj = boardCopy[source.index];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, targetObj);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    }
    // 서로 다른 보드 안에서 투두아이템 재정렬
    if (destination.droppableId !== source.droppableId) {
      setToDos((allBoards) => {
        const sourceCopy = [...allBoards[source.droppableId]];
        const targetObj = {
          ...sourceCopy[source.index],
          board: destination.droppableId,
        };
        const destinationCopy = [...allBoards[destination.droppableId]];
        sourceCopy.splice(source.index, 1);
        destinationCopy.splice(destination.index, 0, targetObj);
        return {
          ...allBoards,
          [source.droppableId]: sourceCopy,
          [destination.droppableId]: destinationCopy,
        };
      });
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>To Do List</Title>
        <DragDropContext onDragEnd={onDragEnd}>
          <BoardWrapper>
            <BoardArea />
            <DeleteItem />
          </BoardWrapper>
        </DragDropContext>
      </Container>
    </>
  );
}

export default App;
