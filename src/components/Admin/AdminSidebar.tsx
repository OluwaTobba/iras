import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaUserPlus, FaChartLine, FaUserShield } from 'react-icons/fa';

function AdminSidebar() {
  const linkClass =
    'flex items-center gap-2 w-full px-4 py-2 rounded-md transition-colors duration-200';
  const activeClass =
    'bg-gradient-to-br from-blue-300 to-red-500 text-white font-semibold';
  const inactiveClass = 'text-black hover:text-orange-500';

  return (
    <aside className="w-72 min-h-screen bg-white shadow-md flex flex-col items-center py-8">
      <div className="flex flex-col items-center mb-10">
        <div className='w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center'>
          <FaUserShield className="text-gray-500" size={48} />
        </div>
        <h2 className="text-lg font-bold text-orange-500 mt-4">ADMIN</h2>
      </div>

      <nav className="w-full px-4 flex flex-col gap-4">
        <ul className="space-y-3">
          <li>
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) => `${linkClass} ${isActive ? activeClass : inactiveClass}`}
            >
              <FaHome /> Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/control"
              className={({ isActive }) => `${linkClass} ${isActive ? activeClass : inactiveClass}`}
            >
              <FaUser /> Officers
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/add-officer"
              className={({ isActive }) => `${linkClass} ${isActive ? activeClass : inactiveClass}`}
            >
              <FaUserPlus /> Add Officers
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/submissions"
              className={({ isActive }) => `${linkClass} ${isActive ? activeClass : inactiveClass}`}
            >
              <FaChartLine /> All Reports
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;