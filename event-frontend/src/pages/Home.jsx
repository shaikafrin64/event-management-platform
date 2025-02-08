import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-50 to-purple-50">
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
  <h1 className="text-4xl font-bold text-gray-800">Welcome to Event Manager</h1>
        <p className="text-lg text-gray-600 mb-8 animate-fade-in delay-100">
          Create and manage your events easily with a seamless experience.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
