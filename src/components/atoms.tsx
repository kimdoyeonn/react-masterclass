import { atom, selector } from 'recoil';

export enum Categories {
  "TO_DO",
  "DOING",
  "DONE",
}

export interface IToDo {
  text: string;
  category: Categories;
  id: number;
}

export const todoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});

export const categoryState = atom<Categories>({
  key: 'categoryState',
  default: Categories.TO_DO,
});

export const todoSelector = selector({
  key: 'todoSelector',
  get: ({ get }) => {
    const toDos = get(todoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
