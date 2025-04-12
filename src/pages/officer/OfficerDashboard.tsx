import Logout from '../../components/Logout';

function OfficerDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex justify-between items-center p-4 shadow-md bg-white">
        <h1 className="text-xl font-bold text-red-700">Officer Dashboard</h1>
        <Logout />
      </header>

      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Available Templates</h2>

        <p className="text-gray-600">List of templates will be displayed here...</p>
      </main>
    </div>
  );
}

export default OfficerDashboard;
