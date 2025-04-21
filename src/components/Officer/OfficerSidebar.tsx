import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaTachometerAlt, FaFileAlt, FaUser } from 'react-icons/fa';

function OfficerSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const linkClass =
    'flex items-center gap-2 w-full px-4 py-2 rounded-md transition-colors duration-200';
  const activeClass =
    'bg-gradient-to-br from-green-400 to-blue-600 text-white font-semibold';
  const inactiveClass = 'text-white hover:text-yellow-300';

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-6 left-4 z-40 text-white bg-orange-700 p-2 rounded-md cursor-pointer"
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
        className={`fixed lg:static top-0 left-0 z-40 w-64 min-h-screen bg-orange-500 shadow-md flex flex-col items-center py-8 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >

        <div className="lg:hidden w-full flex justify-end px-4">
          <FaTimes className="text-white text-2xl cursor-pointer" onClick={closeSidebar} />
        </div>

        <div className="flex flex-col items-center mb-10 mt-4">
          <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
            <FaUser className="text-gray-500" size={48} />
          </div>
          <h2 className="text-lg font-bold text-white mt-4">OFFICER [NAME]</h2>
        </div>

        <nav className="w-full px-4 flex flex-col gap-4">
          <ul className="space-y-3">
            <li>
              <NavLink
                to="/officer/dashboard"
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : inactiveClass}`
                }
                onClick={closeSidebar}
              >
                <FaTachometerAlt /> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/officer/my-reports"
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : inactiveClass}`
                }
                onClick={closeSidebar}
              >
                <FaFileAlt /> My Reports
              </NavLink>
            </li>
          </ul>
        </nav>

      </aside>

    </>
  );
}

export default OfficerSidebar;