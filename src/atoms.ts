import { atom, selector } from 'recoil';

export const isDarkAtom = atom({
  key: 'isDark',
  default: false,
});

export enum Categories {
  'TO_DO' = 'TO_DO',
  'DOING' = 'DOING',
  'DONE' = 'DONE',
}
export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export interface ICategory {
  text: string;
  id: string;
}

const initialCategories = [
  { text: 'to do', id: Categories.TO_DO },
  { text: 'doing', id: Categories.DOING },
  { text: 'done', id: Categories.DONE },
];

export const categoriesState = atom<ICategory[]>({
  key: 'categories',
  default: JSON.parse(
    localStorage.getItem('categories') ?? JSON.stringify(initialCategories)
  ),
});

export const categoryState = atom<Categories>({
  key: 'category',
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: JSON.parse(localStorage.getItem('toDos') ?? '[]'),
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
