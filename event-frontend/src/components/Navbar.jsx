import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Event Manager</h1>
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition-all">
            Home
          </Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 transition-all">
            Dashboard
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-600 transition-all">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
