import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Dashboard = () => {
  const events = [
    { id: 1, name: "React Workshop", date: "2025-02-10" },
    { id: 2, name: "Hackathon", date: "2025-03-15" },
  ];

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl text-center mt-10">Your Events</h1>
      <div className="flex flex-col items-center mt-5">
        {events.map((event) => (
          <div key={event.id} className="border p-4 w-80 my-2">
            <h2 className="text-xl">{event.name}</h2>
            <p>{event.date}</p>
            <Link className="text-blue-500" to={`/event/${event.id}`}>View Details</Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <Link className="bg-green-500 text-white p-2" to="/create-event">Create Event</Link>
      </div>
    </div>
  );
};

export default Dashboard;
