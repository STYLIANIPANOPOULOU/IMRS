// Οθόνη Chatbot - ChatbotPage.jsx
import React, { useState } from 'react';

export default function ChatbotPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input) return;
    setMessages([...messages, { role: 'user', text: input }, { role: 'bot', text: 'Απάντηση συστήματος...' }]);
    setInput('');
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Chatbot</h2>
      <div className="border p-4 h-64 overflow-y-scroll mb-4">
        {messages.map((msg, i) => (
          <div key={i} className={msg.role === 'user' ? 'text-right' : 'text-left'}>
            <p className="text-sm my-1"><strong>{msg.role === 'user' ? 'Εσείς' : 'Bot'}:</strong> {msg.text}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input className="border p-2 flex-1" value={input} onChange={e => setInput(e.target.value)} placeholder="Πληκτρολογήστε μήνυμα..." />
        <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded">Αποστολή</button>
      </div>
    </div>
  );
}