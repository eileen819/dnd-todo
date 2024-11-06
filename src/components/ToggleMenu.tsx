import { useEffect, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { boardState, toDoState } from "../atom";
import { BiDotsHorizontalRounded } from "react-icons/bi";

import EditContent from "./EditContent";

const ToggleBox = styled.div``;

const SelectMenu = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 0;
  bottom: 7px;
`;

const MenuBox = styled.div<{ $active: boolean }>`
  visibility: ${(props) => (props.$active ? "visible" : "hidden")};
  opacity: ${(props) => (props.$active ? 1 : 0)};
  width: 50px;
  height: 50px;
  border: 1px solid #718093;
  border-radius: 5px;
  background-color: #fbfbfb;
  position: absolute;
  right: 0;
  bottom: -40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: opacity 0.2s ease-in;
  button {
    text-align: start;
    width: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #bfecff;
    }
  }
`;

interface IToggleProp {
  index: number;
  boardId: string;
}

function ToggleMenu({ boardId, index }: IToggleProp) {
  const [isEdit, setIsEdit] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const setBoards = useSetRecoilState(boardState);
  const setToDos = useSetRecoilState(toDoState);

  const onEditBoard = () => {
    setIsEdit(true);
    setDropDown(false);
  };

  const onDeleteBoard = () => {
    setBoards((boards) => {
      const newBoards = boards.filter((_, i) => i !== index);
      return newBoards;
    });
    setToDos((oldToDos) => {
      const newToDos = { ...oldToDos };
      delete newToDos[boardId];
      return newToDos;
    });
    setDropDown(false);
  };
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setDropDown(false);
      }
    }
    // 바깥 클릭 이벤트 리스너 추가
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);
  return (
    <>
      {isEdit && (
        <EditContent
          setIsEdit={setIsEdit}
          boardId={boardId}
          index={index}
          mode="board"
          initialValue={boardId}
        />
      )}
      <ToggleBox ref={menuRef}>
        <SelectMenu onClick={() => setDropDown((prev) => !prev)}>
          <BiDotsHorizontalRounded />
        </SelectMenu>
        <MenuBox $active={dropDown}>
          <button onClick={onEditBoard}>edit</button>
          <button onClick={onDeleteBoard}>delete</button>
        </MenuBox>
      </ToggleBox>
    </>
  );
}

export default ToggleMenu;
