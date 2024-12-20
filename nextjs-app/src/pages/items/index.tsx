import { useEffect, useState } from 'react';
import api from '../../app/api';
import Link from 'next/link';
import axios from 'axios';
import router from 'next/router';
import Navbar from '../Navbar';
import "../../app/globals.css";
export default function HomePage() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('auth');
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, []);

  useEffect(() => {

    api.get('/items')
      .then((response) => setItems(response.data))
      .catch(() => setError('Failed to fetch items'));

  }, []);
  
  return (
    <>
    <Navbar />
    <div className="container mt-5 w-50">
      <h2 className="text-center mb-4">Items</h2>
      { error && <p className="text-danger text-center">{error}</p>}
      <ul className="list-group">
        {items.map((item: any) => (
            <Link href={`/items/${item.id}`} className='nav-link'>
              <li key={item.id} className="list-group-item hover-blue">{item.name}</li>
            </Link>
        ))}
      </ul>
    </div>
    </>
  );
}
