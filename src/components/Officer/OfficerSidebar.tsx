import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaFileAlt } from 'react-icons/fa';

function OfficerSidebar() {
  return (
    <aside className="w-64 h-screen bg-blue-900 text-white flex flex-col p-5 space-y-6">
      <div className="text-2xl font-bold">Officer Panel</div>
      <nav className="flex flex-col gap-4">
        <NavLink to="/officer" className={({ isActive }) => isActive ? 'font-semibold' : ''}>
          <div className="flex items-center gap-2"><FaTachometerAlt /> Dashboard</div>
        </NavLink>
        <NavLink to="/officer/reports" className={({ isActive }) => isActive ? 'font-semibold' : ''}>
          <div className="flex items-center gap-2"><FaFileAlt /> Submit Report</div>
        </NavLink>
      </nav>
    </aside>
  );
};

export default OfficerSidebar;