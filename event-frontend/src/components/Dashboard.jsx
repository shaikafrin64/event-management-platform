import EventCard from "../components/EventCard";

const Dashboard = () => {
  const events = [
    {
      id: 1,
      name: "Tech Conference 2023",
      description: "A conference on the latest in technology.",
      date: "2023-12-15",
      image: "https://via.placeholder.com/400x200",
    },
    {
      id: 2,
      name: "Music Festival",
      description: "Annual music festival with top artists.",
      date: "2023-12-20",
      image: "https://via.placeholder.com/400x200",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;