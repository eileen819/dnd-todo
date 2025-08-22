import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { boardState, toDoState } from "../atom";
import { FaPlus } from "react-icons/fa";

interface ICategoryForm {
  boardName: string;
}

const CategoryForm = styled.form`
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border: 1px dashed #fff9bf;
  border-radius: 5px;
  input {
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 1px solid #fff9bf;
    text-align: center;
    padding: 5px 10px;
    &::placeholder {
      color: #fff9bf;
    }
  }
  button {
    background-color: transparent;
    outline: none;
    border: none;
    color: #fff9bf;
  }
`;

function CreateBoard() {
  const { register, handleSubmit, setValue } = useForm<ICategoryForm>();
  const setBoards = useSetRecoilState(boardState);
  const setToDos = useSetRecoilState(toDoState);

  const onValid = ({ boardName }: ICategoryForm) => {
    setBoards((oldBoards) => {
      return [...oldBoards, boardName];
    });

    setToDos((allboards) => {
      return {
        ...allboards,
        [boardName]: [],
      };
    });
    setValue("boardName", "");
  };

  return (
    <CategoryForm onSubmit={handleSubmit(onValid)}>
      <input
        {...register("boardName", { required: true })}
        type="text"
        placeholder="Add New Board"
      />
      <button>
        <FaPlus size={18} />
      </button>
    </CategoryForm>
  );
}
export default CreateBoard;
