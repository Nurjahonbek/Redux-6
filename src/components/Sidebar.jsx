
// import React from "react";
// import Avatar from "./Avatar";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// function Sidebar() {
//   const { user } = useSelector((store) => store.user);

//   return (
//     <div className="col-start-1 col-end-3 bg-gradient-to-r to-blue-100 via-indigo-100 from-teal-100 p-6 rounded-lg shadow-md flex items-start justify-center pt-10">
//       <div className="w-full max-w-xs">
//         <Avatar user={user} />
//       </div>
//       <Link to='/create'>create</Link>
//     </div>
//   );
// }

// export default Sidebar;












import React from "react";
import Avatar from "./Avatar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Sidebar() {
  const { user } = useSelector((store) => store.user);

  return (
    <div className="col-start-1 col-end-3 bg-gradient-to-r to-blue-100 via-indigo-100 from-teal-100 p-6 rounded-lg shadow-md flex flex-col items-center pt-10 h-full">
      <div className="w-full max-w-xs">
        <Avatar user={user} />
      </div>
      <div className="flex flex-col space-y-3 mt-auto mb-6">
        <Link
          to="/create"
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
          + Create
        </Link>
        <Link
          to="/"
          className="bg-gradient-to-r from-blue-300 to-green-300 text-center text-gray-900 font-semibold px-6 py-2 rounded-lg shadow-md hover:from-gray-400 hover:to-gray-500 transition-all duration-300">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
