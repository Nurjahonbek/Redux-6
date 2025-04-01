
import React from "react";
import Avatar from "./Avatar";
import { useSelector } from "react-redux";

function Sidebar() {
  const { user } = useSelector((store) => store.user);

  return (
    <div className="col-start-1 col-end-3 bg-gradient-to-r to-blue-100 via-indigo-100 from-teal-100 p-6 rounded-lg shadow-md flex items-start justify-center pt-10">
      <div className="w-full max-w-xs">
        <Avatar user={user} />
      </div>
    </div>
  );
}

export default Sidebar;
