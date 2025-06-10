
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
        <h1 className="text-3xl font-bold text-text-primary mb-2">Ivorian Business Hub</h1>
        <h2 className="text-xl font-semibold text-text-secondary mb-6">Analyse en Temps Réel</h2>
      </div>
      
      <div className="bg-bg-primary p-6 rounded-lg shadow-lg border border-border">
        <h3 className="text-lg font-medium text-text-primary mb-4">Données Mensuelles</h3>
        <div className="w-full h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="var(--color-primary)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-bg-primary p-6 rounded-lg shadow border border-border">
          <h4 className="text-lg font-semibold text-text-secondary mb-2">Total des Ventes</h4>
          <p className="text-3xl font-bold text-primary">3,800</p>
        </div>
        <div className="bg-bg-primary p-6 rounded-lg shadow border border-border">
          <h4 className="text-lg font-semibold text-text-secondary mb-2">Croissance</h4>
          <p className="text-3xl font-bold text-success">+12%</p>
        </div>
        <div className="bg-bg-primary p-6 rounded-lg shadow border border-border">
          <h4 className="text-lg font-semibold text-text-secondary mb-2">Clients Actifs</h4>
          <p className="text-3xl font-bold text-accent">1,245</p>
        </div>
      </div>
    </div>
  );
};

export default RealTime;
