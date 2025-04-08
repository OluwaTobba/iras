import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import OfficerDashboard from './pages/officer/OfficerDashboard';
import TemplateForm from './pages/officer/TemplateForm';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminControl from './pages/admin/AdminControl';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Officer Routes */}
        <Route path="/officer/dashboard" element={<OfficerDashboard />} />
        <Route path="/officer/template/:id" element={<TemplateForm />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/control" element={<AdminControl />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;