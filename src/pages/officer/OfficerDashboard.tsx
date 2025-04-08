function OfficerDashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-3xl border-t-8 border-red-500">
        <h1 className="text-3xl font-bold text-red-800 mb-4">Officer Dashboard</h1>
        <p className="text-gray-600">Welcome Inspection Officer! Officers will be able to fill out report using templates here.</p>
      </div>
    </div>
  );
};

export default OfficerDashboard;