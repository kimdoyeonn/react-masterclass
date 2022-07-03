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

export const categoryState = atom({
  key: 'categoryState',
  default: 'TO_DO',
});

export const todoSelector = selector({
  key: 'todoSelector',
  get: ({ get }) => {
    const toDos = get(todoState);
    const category = get(categoryState);
    return toDos.filter(toDo => toDo.category === category);
  },
});
