import React from "react";
import { Link } from "react-router-dom";
import { useSignOut } from "../hooks/useSignOut";

function Navbar() {
  const { isPending, signout } = useSignOut();

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-white hover:text-indigo-200 transition-colors duration-300 flex items-center"
          >
            <span className="mr-2">🚀</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-300">
              TaskFlow
            </span>
          </Link>
          <button
            onClick={() => signout()}
            disabled={isPending}
            className={`relative overflow-hidden px-6 py-2 rounded-full font-medium text-white shadow-lg
              ${isPending
                ? 'bg-indigo-800'
                : 'bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600'
              } transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5`}>
            {isPending ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing out...
              </span>
            ) : (
              <span className="flex items-center">
                Logout
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                </svg>
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;