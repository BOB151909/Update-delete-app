import './App.css';
import Create from './Compodants/Create';
import Read from './Compodants/Read';
import Update from './Compodants/Update';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoBg from './Compodants/5091624-hd_1920_1080_24fps.mp4'; // Adjusted import statement

function App() {
  return (
    <div className='container'>

      {/* <video autoPlay muted loop className="videoBg">
        <source src={VideoBg} type="video/mp4" /> 
        Your browser does not support the video tag.
      </video> */}

      <div className="content">
        <h1 style={{ textAlign: 'center', color: 'white' }}>Creat Update Delete Table</h1>

        {/* Table overlay */}
        

        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Create />} />
            <Route exact path="/read" element={<Read />} />
            <Route exact path="/update" element={<Update />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
