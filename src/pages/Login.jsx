
import React from "react";
import FormInput from "../components/FormInput";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";

function Login() {
  const { login, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    login(email, password);
  };

  return (
    <main className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex justify-center items-center">
      <section className="bg-white p-8 rounded-xl shadow-xl w-full max-w-sm transform transition-all duration-500">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="Email"
            name="email"
            type="email"
            className="w-full p-3 rounded-md border-2 border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"/>
          <FormInput
            label="Password"
            name="password"
            type="password"
            className="w-full p-3 rounded-md border-2 border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"/>

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className={`w-full p-3 rounded-md text-white font-semibold bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 focus:ring-4 focus:ring-blue-300 transform transition duration-300 ease-in-out hover:scale-102 cursor-pointer`}
              disabled={isPending}>
              {isPending ? "Loading..." : "Login"}
            </button>
            <button className="w-full p-3 rounded-md text-gray-800 font-semibold border-2 border-transparent hover:border-blue-500 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 transform transition duration-300">
              Google
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <b>Don't have an account? </b>
          <Link
            to="/register"
            className="text-blue-600 hover:text-blue-700 font-semibold transition duration-300 ease-in-out" >
             Register
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Login;
