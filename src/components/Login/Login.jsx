import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm my-10 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="lg:text-3xl font-bold">Plese Login !</h1>
        <form>
          <fieldset className="fieldset">
            {/* email field */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            {/* password field */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn bg-amber-300 font-bold text-black mt-4">
              Login
            </button>
          </fieldset>
          <p>
            New to our website ? Please{" "}
            <Link
              className="text-blue-400 hover:text-blue-700 underline"
              to="/register"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
