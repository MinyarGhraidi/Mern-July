import { Link,Route, Routes } from 'react-router-dom';
import './App.css';
import DisplayAll from './Components/DisplayAll';
import Create from './Components/Create';
import ShowOne from'./Components/ShowOne';
import Update from'./Components/Update';
function App() {
  return (
         <div className="App">
      <h1>Notes</h1>



      <Link to="/">Home 🏡</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/create">Create✍</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <Routes>
        <Route path="/" element={<DisplayAll />} />
        <Route path="/create" element={<Create />} />
        <Route path="notes/:id/edit" element={<Update />} />
        <Route path="notes/:id/ShowOne" element={<ShowOne/>} />
      </Routes>

    </div>
  );
}

export default App;
