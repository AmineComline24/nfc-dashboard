import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NFCScanner from './components/NFCScanner';
import EnterCode from './components/EnterCode';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<NFCScanner />} />
          <Route path="/enter-code" element={<EnterCode />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
