// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AlertHtml from './components/AlertHtml';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AlertHtml />} />

         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
