import { useCollection } from "../hooks/useCollection";

function OnlineUser() {
  const { data } = useCollection("users");

  return (
    <div className="col-start-11 col-end-13 p-6 bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-200 rounded-lg shadow-lg space-y-4">
      {data &&
        data.map((user) => {
          return (
            <div
              key={user.id}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-101 ${
                user.isOnline ? "bg-green-100" : "bg-gray-100"
              }`} >
              <div className="w-15 h-15 rounded-full overflow-hidden border-2 border-white">
                <img src={user.photoURL} alt={user.displayName} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-lg text-gray-700">{user.displayName}</span>
                <span
                  className={`text-sm ${
                    user.isOnline ? "text-green-600" : "text-gray-600"
                  }`}
                >
                  {user.isOnline ? "Online" : "Offline"}
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default OnlineUser;
