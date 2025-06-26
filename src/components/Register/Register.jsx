import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  // Controlled form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Navigate to login page on success
        navigate("/admin");
      } else {
        setError(data.error || "Signup failed");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-[500px] flex flex-col gap-4"
      >
        <h1 className="text-3xl font-semibold text-[#193254] mb-4 text-center">
          Create Your Account
        </h1>

        <NavLink to="/admin" className="text-center text-red-500 underline text-xl">
          Already have an account? Log in!
        </NavLink>

        {error && <div className="text-red-500 text-center">{error}</div>}

        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="h-10 w-full border border-gray-300 mt-1 px-3 rounded"
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className="h-10 w-full border border-gray-300 mt-1 px-3 rounded"
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Your Password"
            className="h-10 w-full border border-gray-300 mt-1 px-3 rounded"
            required
          />
          <span className="text-xs text-gray-500 mt-1 block">
            Minimum of 5 characters
          </span>
        </label>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#193254] text-white px-6 py-2 rounded hover:bg-[#14243e] transition duration-300 cursor-pointer"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;





// import React from 'react';
// import { NavLink } from "react-router-dom";

// const Register = () => {
//   return (
//     <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-md w-[500px] flex flex-col gap-4">
//         <h1 className="text-3xl font-semibold text-[#193254] mb-4 text-center">
//           Create Your Account
//         </h1>
// <NavLink to="/Admin" className="text-center text-red-500 underline text-xl">
//   Already have an account? Log in!
// </NavLink>

//         <label >
//           Name
//           <input
//           type="text"
//           placeholder="Enter Your Name"
//           className="h-10 w-full border border-gray-300 mt-1 px-3 rounded"
//         />
//         </label>

//         <label >
//           Email
//           <input
//           type="text"
//           placeholder="Enter Your Email"
//           className="h-10 w-full border border-gray-300 mt-1 px-3 rounded"
//         />
//         </label>

//         <label >
//           Password
//           <input
//           type="text"
//           placeholder="Enter Your Password"
//           className="h-10 w-full border border-gray-300 mt-1 px-3 rounded"
//         />
//          <span className="text-xs text-gray-500 mt-1 block">Minimum of 5 characters</span>
//         </label>

//         <div className="flex justify-center">
//       <button className="bg-[#193254] text-white px-6 py-2 rounded hover:bg-[#14243e] transition duration-300 cursor-pointer">
//         Create Account
//       </button>
//     </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
