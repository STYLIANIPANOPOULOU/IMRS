// Οθόνη Διαχείρισης Μηχανημάτων - InventoryPage.jsx
import React from 'react';

export default function InventoryPage() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Διαχείριση Μηχανημάτων</h2>
      <table className="w-full mt-4 border">
        <thead>
          <tr>
            <th className="border p-2">Κωδικός</th>
            <th className="border p-2">Περιγραφή</th>
            <th className="border p-2">Κατάσταση</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">MCH-001</td>
            <td className="border p-2">Πρέσα λαμαρίνας</td>
            <td className="border p-2">Σε λειτουργία</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
