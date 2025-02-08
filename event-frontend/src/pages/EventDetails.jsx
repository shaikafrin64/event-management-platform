import { useParams } from "react-router-dom";
import AttendeeList from "../components/AttendeeList";

const EventDetails = () => {
  const { id } = useParams(); // Get event ID from URL
  const event = {
    id,
    name: "Sample Event",
    description: "This is a sample event description.",
    date: "2023-12-25",
    image: "https://via.placeholder.com/800x400",
    attendees: ["User1", "User2", "User3"],
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{event.name}</h1>
          <p className="text-gray-600 mb-6">{event.description}</p>
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm text-gray-500">{event.date}</span>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Join Event
            </button>
          </div>
          <AttendeeList attendees={event.attendees} />
        </div>
      </div>
    </div>
  );
};

export default EventDetails;