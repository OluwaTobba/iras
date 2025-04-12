import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AdminRoutes from './routes/AdminRoutes';
import OfficerRoutes from './routes/OfficerRoutes';
import useAuth from './hooks/useAuth';

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  const isAuthenticated = !!user;
  const isAdmin = user?.email === 'admin@sterlingbankhq.com';

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>

      {isAdmin ? (
        <AdminRoutes isAuthenticated={isAuthenticated} />
      ) : (
        <OfficerRoutes isAuthenticated={isAuthenticated} />
      )}
      
    </Router>
  );
}

export default App;