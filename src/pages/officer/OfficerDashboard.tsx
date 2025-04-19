import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Officer/OfficerSidebar';
import Logout from '../../components/Logout';
import {
  FaBuilding,
  FaCreditCard,
  FaMoneyCheckAlt,
  FaUserCheck,
  FaFileInvoiceDollar,
  FaUserPlus,
  FaShoppingCart,
  FaExclamationTriangle,
  FaBalanceScale,
  FaLaptopCode,
} from 'react-icons/fa';

const templates = [
  { id: 'branch-inspection', title: 'Branch Inspection', icon: <FaBuilding />, color: 'bg-blue-100 text-blue-800' },
  { id: 'atm-uptime', title: 'ATM Uptime Report', icon: <FaCreditCard />, color: 'bg-green-100 text-green-800' },
  { id: 'cash-vault-audit', title: 'Cash & Vault Audit', icon: <FaMoneyCheckAlt />, color: 'bg-yellow-100 text-yellow-800' },
  { id: 'customer-service', title: 'Customer Service Audit', icon: <FaUserCheck />, color: 'bg-purple-100 text-purple-800' },
  { id: 'loan-performance', title: 'Loan Performance Report', icon: <FaFileInvoiceDollar />, color: 'bg-pink-100 text-pink-800' },
  { id: 'account-opening', title: 'Account Opening Audit', icon: <FaUserPlus />, color: 'bg-indigo-100 text-indigo-800' },
  { id: 'pos-report', title: 'POS Activity Report', icon: <FaShoppingCart />, color: 'bg-red-100 text-red-800' },
  { id: 'fraud-monitoring', title: 'Fraud Monitoring', icon: <FaExclamationTriangle />, color: 'bg-orange-100 text-orange-800' },
  { id: 'compliance-check', title: 'Regulatory Compliance', icon: <FaBalanceScale />, color: 'bg-cyan-100 text-cyan-800' },
  { id: 'it-checklist', title: 'IT Systems Checklist', icon: <FaLaptopCode />, color: 'bg-gray-100 text-gray-800' },
];

function OfficerDashboard() {
  const navigate = useNavigate();

  const handleTemplateClick = (id: string) => {
    navigate(`/officer/template/${id}`);
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-50 min-h-screen">
        <header className="flex justify-between items-center p-6 shadow-md bg-white">
          <h1 className="text-xl font-bold text-red-700 ml-9">Officer Dashboard</h1>
          <Logout />
        </header>

        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Available Templates</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {templates.map((template) => (
              <button
                key={template.id}
                onClick={() => handleTemplateClick(template.id)}
                className={`rounded-lg shadow-md p-4 flex flex-col items-center justify-center h-40 text-center ${template.color} transition transform hover:scale-105`}
              >
                <div className="text-3xl mb-3">{template.icon}</div>
                <h3 className="text-lg font-medium">{template.title}</h3>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default OfficerDashboard;