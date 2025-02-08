const EventCard = ({ event }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
        <img
          src={event.image || "https://via.placeholder.com/400x200"}
          alt={event.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{event.name}</h3>
          <p className="text-gray-600 mb-4">{event.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">{event.date}</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default EventCard;