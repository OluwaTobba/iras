import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Officer/OfficerSidebar';
import Logout from '../../components/Logout';

function TemplateForm() {
  const { id } = useParams();

  return (
    <div className="flex">
      <Sidebar />

      <main className='flex-1 bg-gray-50 min-h-screen'>
          <header className="flex justify-between items-center p-6 shadow-md bg-white">
            <h1 className="text-xl font-bold text-red-700 ml-9">Template Form</h1>
            <Logout />
          </header>

          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-3xl border-t-8 border-red-500">
              <h1 className="text-2xl font-bold text-red-800 mb-4">Filling Template: {id}</h1>
              <p className="text-gray-600">This is a placeholder for the form corresponding to template ID: {id}.</p>
            </div>
          </div>

      </main>
    </div>
    
  );
}

export default TemplateForm;