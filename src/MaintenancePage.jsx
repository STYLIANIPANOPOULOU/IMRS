// Οθόνη Συντήρησης - MaintenancePage.jsx
import React from 'react';

export default function MaintenancePage() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Δήλωση Συντήρησης / Ελλείψεων</h2>
      <form className="space-y-4 mt-4">
        <input placeholder="Κωδικός Μηχανήματος" className="border p-2 w-full" />
        <textarea placeholder="Περιγραφή προβλήματος ή συντήρησης" className="border p-2 w-full" />
        <input placeholder="Ανταλλακτικά που λείπουν" className="border p-2 w-full" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Υποβολή</button>
      </form>
    </div>
  );
}

