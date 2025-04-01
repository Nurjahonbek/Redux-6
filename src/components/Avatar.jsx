function Avatar({ user }) {
  const { displayName, photoURL } = user;

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gradient-to-r from-blue-400 via-teal-350 to-emerald-300 rounded-lg shadow-lg w-40 h-52 text-center transform duration-300 ease-in-out">
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white mb-4">
        <img src={photoURL} alt={displayName} className="w-full h-full object-cover" />
      </div>
      <p className="text-md font-medium  text-gray-800 opacity-80 mt-2">Hello</p>
      <h3 className="text-xl font-bold text-gray-800">{displayName}</h3>
    </div>
  );
}

export default Avatar;
