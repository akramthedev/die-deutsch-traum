import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home.jsx';
import Dokument from './Dokument.jsx';
import Todo from "./Todo.jsx";
import TimeManag from "./TimeManag.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Dokument' element={<Dokument />} />
          <Route path='/todo' element={<Todo />} />
            <Route path="/TimeManag" element={<TimeManag />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
