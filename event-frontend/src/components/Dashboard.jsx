import { useEffect, useState } from "react";

const Dashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event._id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.description}</p>
            <button className="btn mt-2">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
