import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chart from './Routes/Chart';
import Coin from './Routes/Coin';
import Price from './Routes/Price';
import ToDoList from './Components/ToDoList';
import Coins from './Routes/Coins';

function Router() {
  return (
    <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route path='/' element={<Coins />} />
        <Route path='/:coinId' element={<Coin />}>
          <Route path={`price`} element={<Price />} />
          <Route path={`chart`} element={<Chart />} />
        </Route>
        <Route path='/todo' element={<ToDoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
