import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function IndexPage() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('auth');
    if (isAuthenticated) {
      router.push('/items'); 
    } else {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="container mt-5">
      <h2>Loading...</h2>
    </div>
  );
}
