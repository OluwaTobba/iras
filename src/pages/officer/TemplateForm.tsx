import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Officer/OfficerSidebar';
import Logout from '../../components/Logout';

function TemplateForm() {
  const { id } = useParams();

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-gray-50 min-h-screen">
        <header className="flex justify-between items-center p-6 shadow-md bg-white">
          <h1 className="text-xl font-bold text-orange-700 ml-9">Template Form</h1>
          <Logout />
        </header>

        <div className="min-h-screen flex items-center justify-center bg-[#fdebe5] p-6">

          <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-3xl border-t-8 border-orange-700">

            <div className="mt-2 bg-orange-500 text-white font-semibold px-4 py-2 rounded-t-md -mt-8 mb-6">
              Filling Template: {id}
            </div>

            <form className="space-y-6">

              <div>
                <label className="block font-semibold mb-1">Branch Name</label>
                <input type="text" placeholder="Enter Branch Name" className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>

              <div>
                <label className="block font-semibold mb-1">Location</label>
                <input type="text" placeholder="Enter Location" className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-1">Date of Inspection</label>
                  <input 
                    type="date"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">General Cleanliness</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="cleanliness" value="yes" />
                      Yes
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="cleanliness" value="no" />
                      No
                    </label>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-2">Security Equipment Functional?</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="equipment" value="yes" />
                      Yes
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="equipment" value="no" />
                      No
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold mb-2">Cash Movement Record Status</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="cashRecord" value="yes" />
                      Yes
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="cashRecord" value="no" />
                      No
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">Issues Noted</label>
                <textarea rows={4} placeholder="Type here...." className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>

              <div>
                <label className="block font-semibold mb-1">Recommendations</label>
                <textarea rows={4} placeholder="Type here...." className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>

              <div className="text-right">
                <button type="submit" className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800">
                  Submit Report
                </button>
              </div>

            </form>
          
          </div>
        </div>
      </main>
    </div>
  );
}

export default TemplateForm;