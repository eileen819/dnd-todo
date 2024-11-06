import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { boardState, toDoState } from "../atom";
import { ImCancelCircle } from "react-icons/im";
import { useEffect } from "react";

const Wrapper = styled.div`
  width: 300px;
  height: 100px;
  background-color: white;
  border: 1px solid black;
  border-radius: 15px;
  position: fixed;
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
  const setBoards = useSetRecoilState(boardState);
  const setTodos = useSetRecoilState(toDoState);

  const onValid = ({ editedValue }: IEditForm) => {
    if (mode === "board") {
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
    <Wrapper>
      <ExitBtn onClick={() => setIsEdit(false)}>
        <ImCancelCircle size={18} />
      </ExitBtn>
      <EditForm onSubmit={handleSubmit(onValid)}>
        <input
          {...register("editedValue", { required: true })}
          type="text"
          placeholder="Write New board's name"
        />
        <button>edit</button>
      </EditForm>
    </Wrapper>
  );
}

export default EditContent;
