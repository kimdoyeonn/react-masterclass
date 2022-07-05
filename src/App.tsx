import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hoursSeletor, minutesState } from "./components/atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minutesState);
  const hours = useRecoilValue(hoursSeletor);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  }
  return (
    <div>
      <input type='number' value={minutes} onChange={onMinutesChange}/>
      <input type='number' value={hours} />
    </div>
  );
}

export default App;
