import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NumberPage from './components/NumberPage';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/Home' element = {<Home/>}/>
      <Route path='/:NumberPage' element = {<NumberPage/>}/>
      <Route path='/:NumbPage/:bc/:color' element = {<NumberPage/>}/>


      </Routes>
    </div>
  );
}

export default App;
