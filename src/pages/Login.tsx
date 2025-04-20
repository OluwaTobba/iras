import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login, error } = useLogin();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = await login(email, password);

    if (user) {
      if (user.email === 'admin@sterlingbankhq.com') {
        navigate('/admin/dashboard');
      } else {
        navigate('/officer/dashboard');
      }
    } 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-red-300">

      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md border-t-8 border-red-500">

        <h2 className="text-3xl font-extrabold text-center text-red-800 mb-6">Welcome Back Officer</h2>

        <p className="text-center text-gray-600 mb-8">Login to submit/view reports</p>

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="block text-sm font-semibold text-gray-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center font-medium">{error}</p>}

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-4 rounded-xl hover:bg-red-700 transition duration-200 font-semibold text-lg shadow-md"
          >
            Sign In
          </button>
          
        </form>
      
      </div>
    
    </div>
  );
};

export default Login;