import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold text-center mt-10">Welcome to Event Manager</h1>
      <p className="text-center mt-4">Create and manage your events easily.</p>
    </div>
  );
};

export default Home;
