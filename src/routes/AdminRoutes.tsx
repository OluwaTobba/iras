import { Routes, Route } from 'react-router-dom';
import AdminDashboard from '../pages/admin/AdminDashboard';
import AdminControl from '../pages/admin/AdminControl';
import AddOfficer from '../pages/admin/AddOfficer';
import AllReports from '../pages/admin/AllReports';
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
    <Route
      path="/admin/add-officer"
      element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <AddOfficer />
        </ProtectedRoute>
      }
    />
    <Route
      path="/admin/submissions"
      element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <AllReports />
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default AdminRoutes;