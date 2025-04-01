import React from "react";
import FormInput from "../components/FormInput";
import { useRegister } from "../hooks/useRegister";
import { Link } from "react-router-dom";

function Register() {
  const { register, isPending } = useRegister();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const displayName = formData.get("displayName");
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(displayName, email, password);
    register(displayName, email, password);
  };

  return (
    <main className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 h-screen flex justify-center items-center">
      <section className="bg-white p-7 rounded-xl shadow-xl w-full max-w-md transform transition-all duration-500">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-2.5 ">
          <FormInput
            label="Display Name"
            name="displayName"
            type="text"
            className="w-full p-3 rounded-md border-none transition-all"/>
          <FormInput
            label="Email"
            name="email"
            type="email"
            className="w-full p-3 rounded-md transition-all"/>
          <FormInput
            label="Password"
            name="password"
            type="password"
            className="w-full p-3 rounded-md  transition-all"/>
          <FormInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            className="w-full p-3 rounded-md transition-all"/>

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className={`w-full p-3 rounded-md text-white font-semibold bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 focus:ring-4 focus:ring-teal-300 transform transition duration-300 ease-in-out hover:scale-102 cursor-pointer`}
              disabled={isPending}>
              {isPending ? "Loading..." : "Register"}
            </button>
            <button className="w-full p-3 rounded-md text-gray-800 font-semibold border-2 border-transparent hover:border-teal-500 hover:bg-gray-100 focus:ring-2 focus:ring-teal-500 transform transition duration-300">
              Google
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <b>Already have an account? </b>
          <Link
            to="/login"
            className="text-teal-600 hover:text-teal-700 font-semibold transition duration-300 ease-in-out">
            Login
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Register;
