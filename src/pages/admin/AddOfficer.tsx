import { useState } from 'react';
// import { db } from '../../services/firebase';
// import { collection, addDoc } from 'firebase/firestore';
import Sidebar from '../../components/Admin/AdminSidebar';
import Logout from '../../components/Logout';

function AddOfficer() {
    const [officer, setOfficer] = useState({
        name: '',
        email: '',
        location: '',
        officerId: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOfficer({ ...officer, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Save to Firestore (ensure admin has write access)
        console.log('New Officer:', officer);
    };

  return (
    <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-gray-50 min-h-screen">
            <header className="flex justify-between items-center p-6 shadow bg-white">
                <h1 className="text-2xl font-bold text-red-800">Add New Officer</h1>
                <Logout />
            </header>
            <div className="p-6 max-w-xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4 text-red-700"></h2>
                <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
                    <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={officer.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                    <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={officer.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                    <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={officer.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                    <input
                    type="text"
                    name="officerId"
                    placeholder="Officer ID"
                    value={officer.officerId}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />

                    <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-200"
                    >
                    Add Officer
                    </button>
                </form>
            </div>
        </main>
    </div>
  );
}

export default AddOfficer;