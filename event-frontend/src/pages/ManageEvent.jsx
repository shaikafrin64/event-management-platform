const UpdateDeleteEvent = () => {
    const event = {
      id: 1,
      name: "Tech Conference 2023",
      description: "A conference on the latest in technology.",
      date: "2023-12-15",
    };
  
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Update Event</h1>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700">Event Name</label>
              <input
                type="text"
                defaultValue={event.name}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Description</label>
              <textarea
                defaultValue={event.description}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Date</label>
              <input
                type="date"
                defaultValue={event.date}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex space-x-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Update Event
              </button>
              <button
                type="button"
                className="w-full bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete Event
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default UpdateDeleteEvent;