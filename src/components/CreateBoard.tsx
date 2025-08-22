import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { boardState, toDoState } from "../atom";
import { FaPlus } from "react-icons/fa";

interface ICategoryForm {
  boardName: string;
}

const CategoryForm = styled.form`
  width: 300px;
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
  @media ${({ theme }) => theme.media.desktop} {
    width: 220px;
  }
`;

function CreateBoard() {
  const { register, handleSubmit, setValue } = useForm<ICategoryForm>();
  const [boards, setBoards] = useRecoilState(boardState);
  const setToDos = useSetRecoilState(toDoState);

  const onValid = ({ boardName }: ICategoryForm) => {
    if (boards.includes(boardName.trim())) {
      alert("You already have a board with the same name.");
      return;
    }

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
        {...register("boardName", {
          required: true,
        })}
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
