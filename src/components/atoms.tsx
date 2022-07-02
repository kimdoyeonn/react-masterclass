import { atom, selector } from 'recoil';

export interface IToDo {
  text: string;
  category: 'TO_DO' | 'DOING' | 'DONE';
  id: number;
}

export const todoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});

export const todoSelector = selector({
  key: 'todoSelector',
  get: ({ get }) => {
    const toDos = get(todoState);
    return [
      toDos.filter((toDo) => toDo.category === 'TO_DO'),
      toDos.filter((toDo) => toDo.category === 'DOING'),
      toDos.filter((toDo) => toDo.category === 'DONE'),
    ];
  },
});
