 
import React, { useState } from "react";
  

const LoginPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
 
    alert(
      `First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Password: ${password}`
    );
  };

  return (
    <div style={{backgroundImage:"url(./img/hello.jpg)",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover"
    }}  className="min-h-screen   flex justify-center items-center shadow-slate-900">
      <div className="bg-green-600 shadow-black p-8 rounded-lg shadow-lg max-w-sm w-full opacity-0 animate-fadeIn">
        <h2 className="text-2xl font-semibold text-center text-white mb-6">
          Create Account
        </h2>
        <form onSubmit={handleSubmit}>
           
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-lg text-white ">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              required
              className="w-full p-3 mt-1  bg-slate-100 rounded-lg  focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-700"
            />
          </div>
 
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-lg text-white ">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              required
              className="w-full p-3 mt-1   bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-700"
            />
          </div>

 
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg text-white ">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full p-3 mt-1   bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-700"
            />
          </div>
 
          <div className="mb-6">
            <label htmlFor="password" className="block text-lg text-white ">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full p-3 mt-1 bg-slate-50  -none "
            />
          </div>

          <div className="w-full flex justify-center mx-auto">
          <button
            type="submit"
            className="w-3/5 py-3 bg-green-300text-white  font-semibold rounded-lg justify-center hover:bg-green-300 transition duration-700"
          >
            Register
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
