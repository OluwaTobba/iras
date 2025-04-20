import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaUser, FaUserPlus, FaChartLine, FaUserShield } from 'react-icons/fa';

function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const linkClass =
    'flex items-center gap-2 w-full px-4 py-2 rounded-md transition-colors duration-200';
  const activeClass =
    'bg-gradient-to-br from-blue-300 to-red-500 text-white font-semibold';
  const inactiveClass = 'text-black hover:text-orange-500';

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-6 left-4 z-40 text-white bg-red-700 p-2 rounded-md cursor-pointer"
      >
        <FaBars size={20} />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-30 lg:hidden"
          onClick={closeSidebar}
        />
      )}
    
      <aside 
        className={`fixed lg:static top-0 left-0 z-40 w-72 min-h-screen bg-white shadow-md flex flex-col items-center py-8 transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >

        <div className="lg:hidden w-full flex justify-end px-4">
          <FaTimes className="text-red-700 text-2xl cursor-pointer" onClick={closeSidebar} />
        </div>

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

    </>
  );
};

export default AdminSidebar;