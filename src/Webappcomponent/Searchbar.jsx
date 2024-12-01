import React from "react";

function Searchbar() {
  return (
    <div>
      <div className="w-screen flex justify-center items-center">
        <div className="">
          <input type="text" placeholder="Enter your Areac name" />
          <button className="btn btn-primary">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
