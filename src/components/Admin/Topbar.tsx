import { FaSearch, FaBell } from "react-icons/fa";

function Topbar() {
    return (
      <div className="ml-72 w-[calc(100%-18rem)] flex justify-between items-center px-6 py-4 bg-white shadow-sm fixed top-0 z-10">
      {/* Search Box */}
      <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full w-1/3">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>

      {/* Welcome + Profile */}
      <div className="flex items-center space-x-4">
        <p className="text-sm">
          Welcome, <span className="text-orange-500 font-semibold">Peter Dee</span>
        </p>
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg" // replace with actual image
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <FaBell className="text-gray-700 text-lg cursor-pointer" />
      </div>
    </div>
  );
};

export default Topbar;