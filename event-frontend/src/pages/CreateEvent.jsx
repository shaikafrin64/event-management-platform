import { useState } from "react";

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateEvent = (e) => {
    e.preventDefault();
    console.log("Creating Event...", { eventName, description });
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl mb-4">Create Event</h2>
      <form onSubmit={handleCreateEvent} className="flex flex-col w-80">
        <input className="border p-2 mb-2" type="text" placeholder="Event Name" value={eventName} onChange={(e) => setEventName(e.target.value)} required />
        <textarea className="border p-2 mb-2" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        <button className="bg-blue-500 text-white p-2">Create</button>
      </form>
    </div>
  );
};

export default CreateEvent;
