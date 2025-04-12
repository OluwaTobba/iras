import Logout from '../../components/Logout';

function AdminControl() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex justify-between items-center p-4 shadow-md bg-white">
        <h1 className="text-xl font-bold text-red-700">Admin Control Panel</h1>
        <Logout />
      </header>

      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add or Remove Officers</h2>
        <p className="text-gray-600">Admins can add or remove officers from the system here...</p>
      </main>

    </div>
  );
}

export default AdminControl;