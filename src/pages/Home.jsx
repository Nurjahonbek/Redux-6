import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";

function Dashboard() {
  const { user } = useSelector((store) => store.user);
  const { data } = useCollection("tasks", ["uid", "==", user.uid]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12 drop-shadow-lg tracking-wide">
          Your Tasks 📌
        </h1>

        {data && data.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.map((task) => (
              <Link
                key={task.id}
                to={`/task/${task.id}`}
                className="relative block bg-white shadow-xl rounded-2xl p-6 border-l-8 border-blue-500 hover:border-indigo-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{task.title}</h2>
                <p className="text-gray-600 line-clamp-2">{task.description}</p>
                <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
                  <span>📅 {task.dueTo}</span>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs">
                    Pending
                  </span>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center shadow-md">
                  🔥
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center mt-20">
            <p className="text-center text-gray-600 text-xl">
              No tasks available.
            </p>
            <Link
              to="/create"
              className="mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-102" >
              + Create Task
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
