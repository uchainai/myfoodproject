 
import React, { useState } from "react";
import { NavLink,Link } from "react-router-dom";
import { PiBowlFoodBold } from "react-icons/pi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="transparent p-1">
      <div className="max-w-7xl mx-auto flex justify-around items-center ">
      <div className="flex  justify-center items-center gap-2 md:flex flex-col  md:text-xl">
      <PiBowlFoodBold className="text-4xl text-green-500 bg-white rounded-full cursor-pointer hover:w-12 hover:h-12" />
        <NavLink to="/" className="text-white text-xl sm:text-xm font-bold">
                 FOOD-LOVERS
        </NavLink>
      </div>
        
        <div className="flex flex-row items-center   space-x-1  ">
          <input
            type="text"
            className="bg-gray-700   text-white px-2 py-2 rounded-md focus:outline-none"
            placeholder="Search..."
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
          >
            Search
          </button>
        </div>
        {/* <div   className="text-white flex  list-none my-4">
        <NavLink
            to="/"
            className=" text-white px-4 py-2 rounded-md  "
          >
              <li className=" hover:text-red-600 hover:underline cursor-pointer style-none mx-2 text-lg">Home</li>
          </NavLink>
          <NavLink
            to="/FoodItems"
            className="  text-white px-4 py-2 rounded-md  "
          >
              <li className=" hover:text-red-600 hover:underline cursor-pointer style-none mx-2 text-lg">About</li>
          </NavLink>
          <NavLink
            to="/Navl"
            className= " text-white px-4 py-2 rounded-md "
          >
              <li className=" hover:text-red-600 hover:underline cursor-pointer style-none mx-2 text-lg">Contact</li>
          </NavLink>
      
        </div> */}

        <div className="hidden md:flex   items-center space-x-4 sm:text-center list-none">
        {/* <div   className="text-white flex  list-none my-4 sm:w-full   sm:flex flex-col"> */}
        <NavLink
            to="/logo"
            className=" text-white px-4 py-2 rounded-md  "
          >
              <li className=" hover:text-red-600 hover:underline cursor-pointer style-none mx-2 text-lg">Home</li>
          </NavLink>
          <NavLink
            to="/FoodItems"
            className="  text-white px-4 py-2 rounded-md  "
          >
              <li className=" hover:text-red-600 hover:underline cursor-pointer style-none mx-2 text-lg">About</li>
          </NavLink>
          <NavLink
            to="/Navl"
            className= " text-white px-4 py-2 rounded-md "
          >
              <li className=" hover:text-red-600 hover:underline cursor-pointer style-none mx-2 text-lg">Contact</li>
          </NavLink>
      
        {/* </div>
  */}
          <NavLink
            to="/Login"
            className=" bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Sign Up
          </NavLink>

          
          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            {/* <span className="text-white">John Doe</span> */}
          </div>
        </div>

        
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

       
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} bg-gray-800 p-4 text-center justify-center list-none`}
      >
        <NavLink
            to="/"
            className=" text-white px-4 py-2 rounded-md  "
          >
              <li className=" hover:text-red-600 hover:underline cursor-pointer style-none mx-2 text-lg">Home</li>
          </NavLink>
          <NavLink
            to="/FoodItems"
            className="  text-white px-4 py-2 rounded-md  "
          >
              <li className=" hover:text-red-600 hover:underline cursor-pointer style-none mx-2 text-lg">About</li>
          </NavLink>
          <NavLink
            to="/Navl"
            className= " text-white px-4 py-2 rounded-md "
          >
              <li className=" hover:text-red-600 hover:underline cursor-pointer style-none mx-2 text-lg">Contact</li>
          </NavLink>
      
        <NavLink
          to="/signup"
          className="text-white bg-gray-500 block px-4 py-2 hover:bg-gray-900 rounded-md"
        >
          Sign Up
        </NavLink>
        <div className="flex items-center space-x-2 mt-4 justify-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-white hover:border-spacing-2"
          />
          {/* <span className="text-white">John Doe</span> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
