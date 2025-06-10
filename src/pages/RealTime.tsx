
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 700 },
];

const RealTime = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Ivorian Business Hub</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-6">Analyse en Temps Réel</h2>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Données Mensuelles</h3>
        <div className="w-full h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="text-lg font-semibold text-gray-700 mb-2">Total des Ventes</h4>
          <p className="text-3xl font-bold text-blue-600">3,800</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="text-lg font-semibold text-gray-700 mb-2">Croissance</h4>
          <p className="text-3xl font-bold text-green-600">+12%</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="text-lg font-semibold text-gray-700 mb-2">Clients Actifs</h4>
          <p className="text-3xl font-bold text-purple-600">1,245</p>
        </div>
      </div>
    </div>
  );
};

export default RealTime;
