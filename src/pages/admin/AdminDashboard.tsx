import Logout from '../../components/Logout';

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex justify-between items-center p-4 shadow-md bg-white">
        <h1 className="text-xl font-bold text-red-700">Admin Dashboard</h1>
        <Logout />
      </header>

      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Submitted Reports</h2>
        <p className="text-gray-600">Reports submitted by officers will show here...</p>
      </main>
    </div>
  );
}

export default AdminDashboard;
