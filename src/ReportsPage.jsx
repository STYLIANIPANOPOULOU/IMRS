// Οθόνη Αναφορών - ReportsPage.jsx
import React from 'react';

export default function ReportsPage() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Αναφορές</h2>
      <div className="mt-4 space-y-4">
        <button className="bg-gray-200 px-4 py-2 rounded w-full text-left">Στατιστικά Συντήρησης</button>
        <button className="bg-gray-200 px-4 py-2 rounded w-full text-left">Προβλέψεις Βλαβών</button>
        <button className="bg-gray-200 px-4 py-2 rounded w-full text-left">Αναφορά Κόστους</button>
      </div>
    </div>
  );
}

