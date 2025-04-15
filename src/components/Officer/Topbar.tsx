function Topbar() {
    return (
      <div className="ml-64 p-6 bg-white flex justify-between items-center shadow">
        <h1 className="text-xl font-semibold">Welcome, <span className="text-orange-600">Peter Dee</span></h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="border px-4 py-2 rounded-lg shadow-sm focus:outline-orange-400"
          />
          <img src="/admin-avatar.png" alt="Admin" className="w-10 h-10 rounded-full" />
        </div>
      </div>
    );
  };
  
export default Topbar;