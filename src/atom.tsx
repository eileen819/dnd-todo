import { atom } from "recoil";

export interface IToDo {
  id: number;
  text: string;
  board: string;
}

interface IToDoState {
  [key: string]: IToDo[];
}

export const boardState = atom<string[]>({
  key: "boards",
  default: ["To Do", "Doing", "Done"],
  effects: [
    ({ setSelf }) => {
      const savedBoards = localStorage.getItem("boards");
      if (savedBoards !== null) {
        setSelf(JSON.parse(savedBoards));
      }
    },
    ({ onSet }) => {
      onSet((newBoards) => {
        localStorage.setItem("boards", JSON.stringify(newBoards));
      });
    },
  ],
});

export const toDoState = atom<IToDoState>({
  key: "toDos",
  default: {
    "To Do": [],
    Doing: [],
    Done: [],
  },
  effects: [
    ({ setSelf }) => {
      const savedToDos = localStorage.getItem("toDos");
      if (savedToDos !== null) {
        setSelf(JSON.parse(savedToDos));
      }
    },
    ({ onSet }) => {
      onSet((newToDos) => {
        localStorage.setItem("toDos", JSON.stringify(newToDos));
      });
    },
  ],
});
