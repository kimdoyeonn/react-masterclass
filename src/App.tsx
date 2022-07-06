import React from 'react';
import { useRecoilState } from 'recoil';
import { hoursSeletor, minutesState } from './components/atoms';

function App() {
  const [minutes, setMinutes] = useRecoilState(minutesState);
  const [hours, setHours] = useRecoilState(hoursSeletor);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };
  return (
    <div>
      <input type='number' value={minutes} onChange={onMinutesChange} />
      <input type='number' value={hours} onChange={onHoursChange} />
    </div>
  );
}

export default App;
