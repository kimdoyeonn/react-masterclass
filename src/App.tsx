import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/"/>
        <Route path="/tv"/>
        <Route path="/search"/>
      </Routes>
    </Router>
  );
}

export default App;
