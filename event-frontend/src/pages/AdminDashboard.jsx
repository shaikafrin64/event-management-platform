const AdminDashboard = () => {
    const events = [
      { id: 1, name: "Event 1", date: "2023-12-25", attendees: 10 },
      { id: 2, name: "Event 2", date: "2023-12-30", attendees: 5 },
    ];
  
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
          <div className="space-y-4">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-lg p-6 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{event.name}</h3>
                  <p className="text-gray-600">{event.date}</p>
                </div>
                <span className="text-gray-700">{event.attendees} attendees</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default AdminDashboard;