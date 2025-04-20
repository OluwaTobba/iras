import { useState, useEffect } from 'react';
import Sidebar from '../../components/Admin/AdminSidebar';
import Logout from '../../components/Logout';

interface Report {
    id: string;
    officerName: string;
    officerId: string;
    location: string;
    submittedAt: string;
    summary: string;
}

function AllReports() {
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
        <div className="flex flex-col md:flex-row">
            <Sidebar />
            <main className="flex-1 bg-gray-50 min-h-screen">
                <header className="flex justify-between items-center p-6 shadow bg-white">
                    <h1 className="text-xl font-bold text-red-800 ml-9">All Reports</h1>
                    <Logout />
                </header>

                <div className="px-6 py-6">
                    <h2 className="text-2xl md:text-2xl font-semibold text-red-700 mb-4"></h2>

                    <div className="overflow-x-auto bg-white rounded-xl shadow-md p-4">

                        <table className="min-w-full text-left text-sm">
                            <thead>
                                <tr className="md:text-sm text-gray-600 border-b text-xs">
                                <th className="py-2 px-2">Officer</th>
                                <th className="py-2 px-2">Officer ID</th>
                                <th className="py-2 px-2">Location</th>
                                <th className="py-2 px-2">Date Submitted</th>
                                <th className="py-2 px-2">Summary</th>
                                <th className="py-2 px-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reports.map((report) => (
                                <tr key={report.id} className="border-b hover:bg-gray-50 text-xs md:text-sm">
                                    <td className="py-2 px-2">{report.officerName}</td>
                                    <td className="py-2 px-2">{report.officerId}</td>
                                    <td className="py-2 px-2">{report.location}</td>
                                    <td className="py-2 px-2">{report.submittedAt}</td>
                                    <td className="py-2 px-2">{report.summary}</td>
                                    <td className="py-2 px-2">
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
    )
}

export default AllReports;