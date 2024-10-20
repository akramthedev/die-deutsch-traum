import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home.jsx';
import Dokument from './Dokument.jsx';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Dokument' element={<Dokument />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
