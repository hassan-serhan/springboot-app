import { useState } from 'react';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('auth', 'true');
      router.push('/items');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="container mt-5 w-50">
      <h2>Login</h2>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control mb-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control mb-2"
        />
        <button onClick={handleLogin} className=" mt-2 btn btn-primary">Login</button>
        {error && <p className="text-danger mt-2">{error}</p>}
      </div>
    </div>
  );
}
