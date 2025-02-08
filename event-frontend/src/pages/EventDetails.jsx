import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const EventDetails = () => {
  const { id } = useParams();
  const event = { id, name: "React Workshop", description: "A deep dive into React.js", date: "2025-02-10" };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-2xl">{event.name}</h2>
        <p>{event.description}</p>
        <p>Date: {event.date}</p>
      </div>
    </div>
  );
};

export default EventDetails;
