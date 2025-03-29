import React from "react";
import FormInput from "../components/FormInput";

function Login() {
  return (
    <main>
      <section className="w-full grid place-items-center h-screen">
        <form className="flex w-full max-w-96 flex-col">
          <h2 className="text-3xl text-center font-bold mb-5">Login</h2>
          <FormInput label="Email:" name="email" type="email" />
          <FormInput label="Password:" name="passowrd" type="password" />
          <div className="flex gap-2 mt-5">
            <button className="btn btn-primary grow">Login</button>
            <button className="btn btn-secondary grow">Google</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;





