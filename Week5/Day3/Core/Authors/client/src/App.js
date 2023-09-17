import { BrowserRouter as  Route, Routes } from 'react-router-dom';
import './App.css';
import CreateAuthor from './components/CreateAuthor';
import AuthorsList from './components/AuthorsList';
import EditAuthor from './components/EditAuthor';
function App() {
  return (
    <div className="App">
           <Routes>
        <Route path="/" element={<AuthorsList />} />
        <Route path="/create" element={<CreateAuthor />} />
        <Route path="/edit/:id" element={<EditAuthor />} />
      </Routes>
    </div>
  );
}

export default App;
