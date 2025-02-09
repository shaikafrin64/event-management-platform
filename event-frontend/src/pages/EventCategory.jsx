const CreateEventCategory = () => {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Create Event Category</h1>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700">Category Name</label>
              <input
                type="text"
                placeholder="Category Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create Category
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default CreateEventCategory;