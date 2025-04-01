import React from "react";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          My Dashboard
        </h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
            <span className="text-sm font-medium text-gray-700">
              + New Task
            </span>
          </button>
          <button className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex space-x-2 mb-8 overflow-x-auto pb-2">
        {[
          "all",
          "mine",
          "frontend",
          "backend",
          "design",
          "marketing",
          "others",
        ].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              tab === "frontend"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
            <h2 className="text-xl font-bold text-white">Frontend</h2>
          </div>
          <div className="p-4 space-y-4">
            {[
              { title: "Final Exam", due: "Wed Nov 05 2008" },
              { title: "Task 2", due: "Tue Mar 11 2025", important: true },
              { title: "Task 3", due: "Fri Jan 17 2025" },
            ].map((task, index) => (
              <div
                key={index}
                className="p-3 border border-gray-100 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <p className="text-xs text-gray-500 mb-1">{task.due}</p>
                <p
                  className={`font-medium ${
                    task.important ? "text-blue-600 font-bold" : "text-gray-700"
                  }`}
                >
                  {task.title}
                </p>
                <div className="flex justify-end mt-2">
                  <button className="text-xs text-blue-500 hover:text-blue-700">
                    Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-4">
            <h2 className="text-xl font-bold text-white">New Portfolio</h2>
          </div>
          <div className="p-4">
            <div className="p-3 border border-gray-100 rounded-lg hover:bg-purple-50 transition-colors">
              <p className="text-xs text-gray-500 mb-1">
                Due by: Tue Feb 04 2025
              </p>
              <p className="text-gray-700">Portfolio redesign</p>
              <div className="flex justify-end mt-2">
                <button className="text-xs text-purple-500 hover:text-purple-700">
                  Details →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1 border-2 border-dashed border-gray-300 flex items-center justify-center min-h-[200px]">
          <div className="text-center p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mx-auto text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <p className="mt-2 text-gray-500">Add new project</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
