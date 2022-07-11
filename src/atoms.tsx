import { atom } from 'recoil';

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: 'toDoState',
  default: {
    to_do: ['a', 'e'],
    doing: ['c', 'd'],
    done: ['b'],
  },
});
