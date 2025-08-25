import { Draggable } from "@hello-pangea/dnd";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { toDoState } from "../atom";
import { useSetRecoilState } from "recoil";
import CardArea from "./CardArea";
import { memo, useRef } from "react";
import ToggleMenu from "./ToggleMenu";

const Wrapper = styled.div`
  width: 300px;
  min-height: 300px;
  background-color: ${(props) => props.theme.boardColor};
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 2px 2px 7px rgba(86, 86, 86, 0.1);

  @media ${({ theme }) => theme.media.desktop} {
    width: 220px;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-top: 5px;
  margin-bottom: 10px;
`;

const BoardName = styled.h2`
  /* text-align: center; */
  font-weight: 600;
  /* margin-bottom: 10px; */
  font-size: 18px;
  cursor: grab;
  color: #303952;
  flex-grow: 1;
`;

const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
    padding: 5px;
    outline: none;
    border: 1px solid #a6aebf;
    border-radius: 5px;
    font-size: 14px;
    &:focus {
      border: 1px solid #cb9df0;
    }
  }
`;

interface IBoardProps {
  boardId: string;
  index: number;
}

interface IForm {
  toDo: string;
}

function Board({ boardId, index }: IBoardProps) {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onValid = ({ toDo }: IForm) => {
    const newToDo = {
      id: Date.now(),
      text: toDo,
      board: boardId,
    };
    setToDos((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [...allBoards[boardId], newToDo],
      };
    });
    setValue("toDo", "");
    inputRef.current?.blur();
  };

  return (
    <Draggable draggableId={boardId} index={index}>
      {(provided) => (
        <Wrapper ref={provided.innerRef} {...provided.draggableProps}>
          <Title {...provided.dragHandleProps}>
            <BoardName>{boardId}</BoardName>
            <ToggleMenu boardId={boardId} index={index} />
          </Title>
          <Form onSubmit={handleSubmit(onValid)}>
            <input
              {...register("toDo", { required: true })}
              ref={(el) => {
                register("toDo").ref(el);
                inputRef.current = el;
              }}
              type="text"
              placeholder={`Add task on ${boardId}`}
            />
          </Form>
          <CardArea boardId={boardId} />
        </Wrapper>
      )}
    </Draggable>
  );
}

export default memo(Board);
