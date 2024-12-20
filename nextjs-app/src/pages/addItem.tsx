import { useEffect, useState } from 'react';
import api from '../app/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from 'next/router';
import Navbar from './Navbar';

export default function AddItemPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(true);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('auth');
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, []);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(''), 3000);
      setName('');
      setDescription('');
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleSubmit = async () => {
    setIsError(true);
    if (!name.trim()) {
      setMessage('Name is required');
      return;
    }
    try {
      await api.post('/items', { name, description });
      setIsError(false);
      setMessage('Item added successfully!');
    } catch {
      setMessage('Failed to add item.');
    }
  };


  return (
    <>
    <Navbar />
    <div className="container mt-5 w-50">
      <h2>Add Item</h2>
      <input
        type="text"
        placeholder="Name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control mb-2"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-control mb-2"
      />
      <button onClick={handleSubmit} className="btn btn-primary">Add Item</button>
      {message && <p className={`mt-2 ${isError ? 'text-danger' : 'text-success'}`}>{message}</p>}
    </div>
    </>
  );
}
