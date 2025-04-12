import Logout from './Logout';

function Header() {
  return (
    <div className="flex justify-between items-center p-4 shadow-md bg-white">
      <h1 className="text-xl font-bold text-red-700">Inspection Portal</h1>
      <Logout />
    </div>
  );
}

export default Header;