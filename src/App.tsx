
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RealTime from './pages/RealTime';

const App = () => {
  return (
    <div className="min-h-screen bg-bg-secondary">
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<RealTime />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
