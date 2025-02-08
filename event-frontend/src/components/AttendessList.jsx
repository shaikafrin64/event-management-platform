const AttendeeList = ({ attendees }) => {
    return (
      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Attendees</h2>
        <div className="space-y-2">
          {attendees.map((attendee, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                {attendee[0]}
              </div>
              <span className="text-gray-700">{attendee}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default AttendeeList;