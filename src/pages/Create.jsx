import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFirestore } from "../hooks/useFirestore";

function Create() {
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const { addTask, isPending } = useFirestore("tasks");
  const [dateType, setDateType] = useState("text");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const title = formData.get("title");
    const dueTo = formData.get("due-to");
    const description = formData.get("description");

    addTask({
      uid: user.uid,
      title,
      dueTo,
      description,
      creator: {
        displayName: user.displayName,
        email: user.email,
      },
    }).then(() => navigate("/"));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 p-4">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-5">Create New Task</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1">Title</label>
            <input
              type="text"
              name="title"
              required
              className="w-full border-2 border-gray-300 bg-white rounded-lg px-3 py-2 text-lg text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition-all duration-300"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1">Due Date</label>
            <input
              type={dateType}
              name="due-to"
              required
              placeholder="Select Date"
              onFocus={() => setDateType("date")}
              onBlur={(e) => !e.target.value && setDateType("text")}
              className="w-full border-2 border-gray-300 bg-white rounded-lg px-3 py-2 text-lg text-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none transition-all duration-300"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1">Description</label>
            <textarea
              name="description"
              required
              className="w-full h-28 border-2 border-gray-300 bg-white rounded-lg px-3 py-2 text-lg text-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-300 outline-none transition-all duration-300 resize-none"
            ></textarea>
          </div>

          <div className="mt-6">
            {!isPending && (
              <button className="w-full cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Add Task
              </button>
            )}
            {isPending && (
              <button className="w-full bg-gray-400 cursor-pointer text-white font-semibold py-3 rounded-lg" disabled>
                Loading...
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
