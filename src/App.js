import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home.jsx';
import Dokument from './Dokument.jsx';
import Todo from "./Todo.jsx";
import TimeManag from "./TimeManag.jsx";
import TimeManag2 from "./TimeManag2.jsx";
import DokumentTelc from "./DokumentTelc.jsx"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Dokument' element={<Dokument />} />
          <Route path='/Dokument-Telc' element={<DokumentTelc />} />
          <Route path='/todo' element={<Todo />} />
          <Route path="/TimeManag" element={<TimeManag />} />
          <Route path="/TimeManag2" element={<TimeManag2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
