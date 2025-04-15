import Sidebar from '../../components/Admin/AdminSidebar';
import OfficerCard from '../../components/Admin/OfficerCard';
// import Topbar from '../../components/Admin/Topbar';
import Logout from '../../components/Logout';

function AdminControl() {
  const dummyOfficers = [
    {
      name: 'Jane Doe',
      role: "Manager",
      email: 'jane@bank.com',
      location: 'Lagos',
      staffId: '1234',
      profilePic: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      name: 'John Smith',
      role: "Supervisor",
      email: 'john@bank.com',
      location: 'Abuja',
      staffId: '5678',
      profilePic: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      name: 'John Smith',
      role: "Supervisor",
      email: 'john@bank.com',
      location: 'Abuja',
      staffId: '5678',
      profilePic: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      name: 'John Smith',
      role: "Supervisor",
      email: 'john@bank.com',
      location: 'Abuja',
      staffId: '5678',
      profilePic: 'https://randomuser.me/api/portraits/men/2.jpg'
    }
  ];

  return (
    <div>
      <div className="flex">

        <Sidebar />

        <main className="flex-1 bg-gray-50 min-h-screen">
          <header className="flex justify-between items-center p-6 shadow bg-white">
            <h1 className="text-2xl font-bold text-red-800">Officers Overview</h1>
            <Logout />
          </header>

          <section className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800"></h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {dummyOfficers.map((officer, index) => (
                <OfficerCard key={index} {...officer} />
              ))}
            </div>
          </section>

        </main>

      </div>
    </div>
  );
}

export default AdminControl;