
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RealTime from './pages/RealTime';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <Routes>
        <Route path="/" element={<RealTime />} />
      </Routes>
    </div>
  );
};

export default App;
