import { useState, useEffect } from 'react';
import Sidebar from '../../components/Admin/AdminSidebar';
// import OfficerCard from '../../components/Admin/OfficerCard';
// import Topbar from '../../components/Admin/Topbar';
import Logout from '../../components/Logout';

interface Report {
  id: string;
  officerName: string;
  officerId: string;
  location: string;
  submittedAt: string;
  summary: string;
}

function AdminDashboard() {
  const [reports, setReports] = useState<Report[]>([]);
  
    useEffect(() => {
      // Simulated fetch - replace with Firestore logic
      setReports([
        {
          id: 'rep001',
          officerName: 'Jane Doe',
          officerId: 'NGC123',
          location: 'Lagos',
          submittedAt: '2025-04-15 09:30 AM',
          summary: 'ATM inspection completed. All functional.'
        },
        {
          id: 'rep002',
          officerName: 'John Smith',
          officerId: 'NGC456',
          location: 'Abuja',
          submittedAt: '2025-04-15 10:10 AM',
          summary: 'Network issue resolved in customer service unit.'
        }
      ]);
  }, []);

  return (
    <div>
      <div className="flex">

        <Sidebar />

        <main className="flex-1 bg-gray-50 min-h-screen">
          <header className="flex justify-between items-center p-6 shadow bg-white">
            <h1 className="text-2xl font-bold text-red-800">Latest Reports</h1>
            <Logout />
          </header>

          <div className="p-6">
              <h2 className="text-2xl font-semibold text-red-700 mb-4"></h2>

              <div className="overflow-x-auto bg-white rounded-xl shadow-md p-4">

                <table className="min-w-full text-left">
                  <thead>
                      <tr className="text-sm text-gray-600 border-b">
                      <th className="py-2">Officer</th>
                      <th className="py-2">Officer ID</th>
                      <th className="py-2">Location</th>
                      <th className="py-2">Date Submitted</th>
                      <th className="py-2">Summary</th>
                      <th className="py-2">Action</th>
                      </tr>
                  </thead>
                  <tbody>
                    {reports.map((report) => (
                      <tr key={report.id} className="border-b hover:bg-gray-50">
                          <td className="py-2">{report.officerName}</td>
                          <td className="py-2">{report.officerId}</td>
                          <td className="py-2">{report.location}</td>
                          <td className="py-2">{report.submittedAt}</td>
                          <td className="py-2">{report.summary}</td>
                          <td className="py-2">
                          <button className="text-blue-600 hover:underline">View</button>
                          </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

              </div>

          </div>

        </main>

      </div>
    </div>
  );
}

export default AdminDashboard;
