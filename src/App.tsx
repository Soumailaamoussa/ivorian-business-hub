
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RealTime from './pages/RealTime';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<RealTime />} />
      </Routes>
    </div>
  );
};

export default App;
