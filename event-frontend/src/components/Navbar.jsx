import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-blue-500 text-white flex justify-between">
      <h1 className="text-lg font-bold">Event Manager</h1>
      <div>
        <Link className="mx-2" to="/">Home</Link>
        <Link className="mx-2" to="/dashboard">Dashboard</Link>
        <Link className="mx-2" to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
