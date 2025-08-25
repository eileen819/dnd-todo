import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { boardState, toDoState } from "../atom";
import { ImCancelCircle } from "react-icons/im";
import { useEffect } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
`;

const Wrapper = styled.div`
  width: 300px;
  height: 100px;
  background-color: white;
  border: 1px solid black;
  border-radius: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const EditForm = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    font-size: 16px;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    margin-right: 10px;
    padding: 5px 10px;
  }
`;

const ExitBtn = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  position: absolute;
  top: 10px;
  right: 5px;
  cursor: pointer;
`;

interface IEditProps {
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  boardId: string;
  index: number;
  mode: "board" | "toDo";
  initialValue: string;
}

interface IEditForm {
  editedValue: string;
}

function EditContent({
  setIsEdit,
  boardId,
  index,
  mode,
  initialValue,
}: IEditProps) {
  const { register, handleSubmit, setValue, setFocus } = useForm<IEditForm>({
    defaultValues: { editedValue: initialValue },
  });
  const [boards, setBoards] = useRecoilState(boardState);
  const setTodos = useSetRecoilState(toDoState);

  const onValid = ({ editedValue }: IEditForm) => {
    if (mode === "board") {
      if (boards.includes(editedValue.trim())) {
        alert("You already have a board with the same name.");
        return;
      }
      setTodos((oldToDos) => {
        const newToDos = { ...oldToDos };
        const newNameToDos = newToDos[boardId];
        delete newToDos[boardId];
        return {
          ...newToDos,
          [editedValue]: newNameToDos,
        };
      });
      setBoards((oldBoards) => [
        ...oldBoards.slice(0, index),
        editedValue,
        ...oldBoards.slice(index + 1),
      ]);
      setValue("editedValue", "");
      setIsEdit(false);
    }
    if (mode === "toDo") {
      setTodos((oldToDos) => {
        const newToDos = { ...oldToDos };
        const newToDoList = newToDos[boardId].map((todo) =>
          todo.id === index ? { ...todo, text: editedValue } : todo
        );
        return {
          ...oldToDos,
          [boardId]: newToDoList,
        };
      });
    }
    setIsEdit(false);
  };

  useEffect(() => {
    setFocus("editedValue");
  }, [setFocus]);

  return (
    <Container>
      <Wrapper>
        <ExitBtn onClick={() => setIsEdit(false)}>
          <ImCancelCircle size={18} />
        </ExitBtn>
        <EditForm onSubmit={handleSubmit(onValid)}>
          <input
            {...register("editedValue", { required: true })}
            type="text"
            placeholder={
              mode === "board" ? "Write New board's name" : "Edit what to do"
            }
          />
          <button>edit</button>
        </EditForm>
      </Wrapper>
    </Container>
  );
}

export default EditContent;
