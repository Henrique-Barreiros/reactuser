import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CadastroPage from './components/CadastroPage';
import Navigation from './components/Navigation';
import UpdatePage from './components/UpdatePage';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastropage" element={<CadastroPage />} />
          <Route path="/update/:id" element={<UpdatePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
