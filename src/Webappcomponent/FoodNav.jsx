import React, { createElement } from "react";
import "../Style/recipi.css";
import { FaHome } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { NavLink } from "react-router-dom";

function FoodNav() {
  const fatchRecipi = async (quary) => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?=${quary}`
    );
    const respons = await data.json();
    console.log(respons);

    respons.meals.forEach((meal) => {
      const recpidiv = document.createElement("div");
      recpidiv.classList.add("recipe");
      console.log(recpidiv);
      recpidiv.innerHTML = `
    <img src="${meal.strMealThumb}"/>
     <h3>${meal.strArea}</h3>
     <p>${meal.strMeal}</p>
      <p>${meal.idMeal}</p>
    <p><span>${meal.strCategory} </span> Desh</p>
    `;

      recipicontainer.appendChild(recpidiv);

      recipicontainer.style.backgroundColor = "white";
    });

    const none = document.getElementById("id");
    none.style.display = "none";
  };

  const fatch = () => {
    const searchInput = searchBox.value.trim();
    fatchRecipi(searchInput);
  };

  return (
    <div className="sm:flex flex-row-1">
      <div className="navbar bg-slate-200   px-28  font-mono">
        <div className="flex-1 justify-around ">
          <div>
            <NavLink
              className="btn btn-ghost text-2xl  text-black font-bold hover:translate-2   scale-105  "
              to="/logo"
              end
            >
              FOOD-LOVERS
            </NavLink>
          </div>
          <div className="flex justify-around gap-6 mr-4  ">
            <div className="flex gap-2 text-black font-bold hover:text-primary   duration-200 transition-transform">
              <FaHome />
              <NavLink className="hover:underline" to="/" end>
                Home
              </NavLink>
            </div>
            <div className="flex gap-2 text-black font-bold hover:text-primary  duration-200  transition-transform">
              <MdOutlineProductionQuantityLimits />
              <NavLink className="hover:underline" to="/Navl" end>
                Foods
              </NavLink>
            </div>

            <div className="flex gap-2 text-black font-bold hover:text-primary   duration-200 transition-transform">
              <IoMdContacts />
              <NavLink className="hover:underline" to="/FoodItems">
                Contact
              </NavLink>
            </div>
          </div>
        </div>

        <div className="gap-2 sm:flex flex-row">
          <div className="form-control flex flext-col sm:flex flex-row">
            <input
              id="searchBox"
              type="text"
              placeholder="search your foods"
              className="input  w-24 sm:w-auto pl-8 bg-white text-black relative mr-1 hover:shadow-purple-500 hover:border-purple-500"
            />
          </div>
          <button onClick={fatch} id="Search" className="btn">
            Search
          </button>

          <div className=" px-4 py-3 rounded hover:bg-slate-100">
            <NavLink className="text-black" to="/Login">
              Login
            </NavLink>
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src="./image/pro.jpg" alt="photo" />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <div>
            <button className="btn bg-slate-300 border-none outline-none text-black font-bold hover:bg-slate-200">
              singup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodNav;
