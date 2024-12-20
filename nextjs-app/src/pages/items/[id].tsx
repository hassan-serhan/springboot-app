import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import api from '../../app/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Navbar';
import Link from 'next/link';

export default function ItemDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState<any>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      api.get(`/items/${id}`)
        .then((response) => setItem(response.data))
        .catch(() => setError('Item not found'));
    }
  }, [id]);

  return (
    <>
    <Navbar />
    <div className="container mt-5">
      {error ? (
        <p className="text-danger">{error}</p>
      ) : (
        item && (
          <div>
            <h2>Item Name: {item.name}</h2>
            <p>Description: {item.description}</p>
          </div>
        )
      )}
        <div><Link className='btn btn-primary' href='/'>Back</Link></div>
    </div>
    </>
  );
}
