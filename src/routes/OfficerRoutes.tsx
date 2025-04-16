import { Routes, Route } from 'react-router-dom';
import OfficerDashboard from '../pages/officer/OfficerDashboard';
import TemplateForm from '../pages/officer/TemplateForm';
import MyReports from '../pages/officer/MyReports';
import ProtectedRoute from './ProtectedRoute';

const OfficerRoutes = ({ isAuthenticated }: { isAuthenticated: boolean }) => (
  <Routes>
    <Route
      path="/officer/dashboard"
      element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <OfficerDashboard />
        </ProtectedRoute>
      }
    />
    <Route
      path="/officer/template/:id"
      element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <TemplateForm />
        </ProtectedRoute>
      }
    />
    <Route
      path="/officer/my-reports"
      element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <MyReports />
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default OfficerRoutes;