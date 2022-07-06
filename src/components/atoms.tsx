import { atom, selector } from 'recoil';

export const minutesState = atom({
  key: 'minutes',
  default: 0,
});

export const hoursSeletor = selector({
  key: 'hours',
  get: ({ get }) => {
    return get(minutesState) / 60;
  },
  set: ({ set }, newValue) => {
    const newMinutes = Number(newValue) * 60;
    set(minutesState, newMinutes);
  },
});
