import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext"; // ✅ Import UserContext

function Admin() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext); // ✅ Use setUser from context

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // ✅ Save user and token to localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // ✅ Update context so header can display username
        setUser(data.user);

        navigate("/");
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[500px] bg-white p-8 rounded-lg shadow-lg gap-6"
      >
        <h1 className="text-4xl text-[#193254] font-semibold text-center">
          LOG IN TO YOUR ACCOUNT
        </h1>

        <NavLink
          to="/register"
          className="text-center underline text-red-500 text-2xl hover:text-red-700 transition-colors cursor-pointer"
        >
          No Account? Create one
        </NavLink>

        {error && <div className="text-red-500 text-center">{error}</div>}

        <div className="flex flex-col gap-4">
          <label className="text-xl">
            Email
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email address"
              value={formData.email}
              onChange={handleChange}
              className="h-10 w-full border border-gray-300 mt-1 px-3 rounded"
              required
              autoComplete="email"
            />
          </label>

          <label className="text-xl">
            Password
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="h-10 w-full border border-gray-300 mt-1 px-3 rounded"
              required
              autoComplete="current-password"
            />
            <span className="text-xs text-gray-500 mt-1 block">
              Minimum of 5 characters
            </span>
          </label>
        </div>

        <div className="text-center text-red-500 underline cursor-pointer text-lg">
          Forgot your password?
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#193254] text-white px-6 py-2 rounded hover:bg-[#14243e] transition duration-300 cursor-pointer"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Admin;






// import React from 'react'
// import { NavLink } from "react-router-dom";


// function Admin() {
//   return (
//   <div className="w-full h-screen flex items-center justify-center bg-gray-100">
//   <div className="flex flex-col w-[500px] bg-white p-8 rounded-lg shadow-lg gap-6">

//     <h1 className="text-4xl text-[#193254] font-semibold text-center">
//       LOG IN TO YOUR ACCOUNT
//     </h1>

//     <NavLink
//   to="/register"
//   className="text-center underline text-red-500 text-2xl hover:text-red-700 transition-colors cursor-pointer"
// >
//   No Account? Create one
// </NavLink>


//     <div className="flex flex-col gap-4">
//       <label className="text-xl">
//         Email
//         <input
//           type="text"
//           placeholder="Enter Your Email address"
//           className="h-10 w-full border border-gray-300 mt-1 px-3 rounded"
//         />
//       </label>

//       <label className="text-xl">
//         Password
//         <input
//           type="password"
//           placeholder="Password"
//           className="h-10 w-full border border-gray-300 mt-1 px-3 rounded"
//         />
//         <span className="text-xs text-gray-500 mt-1 block">Minimum of 5 characters</span>
//       </label>
//     </div>

//     <div className="text-center text-red-500 underline cursor-pointer text-lg">
//       Forgot your password?
//     </div>

//     <div className="flex justify-center">
//       <button className="bg-[#193254] text-white px-6 py-2 rounded hover:bg-[#14243e] transition duration-300 cursor-pointer">
//         Log In
//       </button>
//     </div>

//   </div>
// </div>

//   )
// }

// export default Admin