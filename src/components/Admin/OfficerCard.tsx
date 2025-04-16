interface OfficerProps {
    name: string;
    role: string;
    email: string;
    location: string;
    staffId: string;
    profilePic: string;
  }
  
  const OfficerCard = ({ name, role, email, location, staffId, profilePic }: OfficerProps) => {
    return (
        <div className="w-72 border rounded-lg overflow-hidden shadow-sm bg-white">
            <div className="p-4">
                <div className="flex items-center">

                    <div className="pr-4 border-r border-gray-200">
                        <img
                        src={profilePic}
                        alt={name}
                        className="w-16 h-16 rounded-full object-cover"
                        />
                    </div>

                    <div className="pl-4">
                        <h2 className="font-bold text-lg">{name}</h2>
                        <p className="text-sm text-orange-500 font-medium">{role}</p>
                        <p className="text-sm text-gray-500">{email}</p>
                        <p className="text-sm text-gray-500">{location}</p>
                    </div>
                </div>

                <p className="text-center text-orange-500 font-semibold mt-2">NG{staffId}</p>
                </div>    

            <div className="border-t border-gray-200" />

            <div className="divide-x divide-gray-200 text-sm text-center">
                <button className="py-2 hover:bg-gray-70 text-indigo-600 font-medium cursor-pointer">
                    View Submissions
                </button>
            </div>
        </div>
    );
  };
  
export default OfficerCard;