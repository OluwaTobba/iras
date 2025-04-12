import { Routes, Route } from 'react-router-dom';
import AdminDashboard from '../pages/admin/AdminDashboard';
import AdminControl from '../pages/admin/AdminControl';
import ProtectedRoute from './ProtectedRoute';

const AdminRoutes = ({ isAuthenticated }: { isAuthenticated: boolean }) => (
  <Routes>
    <Route
      path="/admin/dashboard"
      element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <AdminDashboard />
        </ProtectedRoute>
      }
    />
    <Route
      path="/admin/control"
      element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <AdminControl />
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default AdminRoutes;