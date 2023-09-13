import React from 'react';

import { Routes,Route } from 'react-router-dom';
import Form1 from './components/Form1';
import Details from'./components/Details';
import './App.css';

function App() {
  return (
    <div className="App">
      < Form1 />
      <Routes>
      
        <Route path="/products/:id" component={<Details/>} />
        <Route exact path="/" component={<Form1/>} />

    </Routes>
    </div>

  );
}

export default App;
