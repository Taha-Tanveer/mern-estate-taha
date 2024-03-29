import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  // console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setErrors(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setErrors(null);
      navigate("/sign-in");
      console.log(data);
    } catch (error) {
      setLoading(false);
      setErrors(error.message);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Sign - Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="Username"
          className="border rounded-lg p-3"
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="E-mail"
          className="border rounded-lg p-3"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded-lg p-3"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white rounded-lg p-3 hover:opacity-95 disabled:opacity-80 uppercase"
        >
          {loading ? "Loading..." : "Sign - Up"}
        </button>
      </form>
      <div className="flex gap-3 mt-5">
        <p>Already have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700 ">Sign - In</span>
        </Link>
      </div>
      {errors && <p className="text-red-500">{errors}</p>}
    </div>
  );
};

export default SignUp;
