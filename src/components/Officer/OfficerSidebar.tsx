import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaFileAlt, FaUser } from 'react-icons/fa';

function OfficerSidebar() {
  const linkClass =
    'flex items-center gap-2 w-full px-4 py-2 rounded-md transition-colors duration-200';
  const activeClass =
    'bg-gradient-to-br from-green-400 to-blue-600 text-white font-semibold';
  const inactiveClass = 'text-white hover:text-yellow-300';

  return (
    <aside className="w-64 min-h-screen bg-blue-900 shadow-md flex flex-col items-center py-8">

      <div className="flex flex-col items-center mb-10">
         <div className='w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center'>
            <FaUser className="text-gray-500" size={48} />
        </div>
        <h2 className="text-lg font-bold text-white mt-4">OFFICER [NAME]</h2>
        {/* <p className="text-blue-200 text-sm">Active Duty</p> */}
      </div>


      <nav className="w-full px-4 flex flex-col gap-4">
        <ul className="space-y-3">
          <li>
            <NavLink
              to="/officer/dashboard"
              className={({ isActive }) => `${linkClass} ${isActive ? activeClass : inactiveClass}`}
            >
              <FaTachometerAlt /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/officer/my-reports"
              className={({ isActive }) => `${linkClass} ${isActive ? activeClass : inactiveClass}`}
            >
              <FaFileAlt /> My Reports
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default OfficerSidebar;