import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Sign - Up</h1>
      <form className="flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="Username"
          className="border rounded-lg p-3"
          id="username"
        />
        <input
          type="email"
          placeholder="E-mail"
          className="border rounded-lg p-3"
          id="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded-lg p-3"
          id="password"
        />
        <button className="bg-slate-700 text-white rounded-lg p-3 hover:opacity-95 disabled:opacity-80">
          Sign - Up
        </button>
      </form>
      <div className="flex gap-3 mt-5">
        <p>Already have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700 ">Sign - In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
