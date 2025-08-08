'use client';

import { useEffect, useState } from 'react';

export default function TestPage() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:8000/test')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage('Error connecting to backend'));
  }, []);

  return (
    <div className="p-6">Ye
      <h1 className="text-xl font-bold">Test API</h1>
      <p>{message}</p>
    </div>
  );
}