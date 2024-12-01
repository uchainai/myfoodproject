import React from "react";

const FoodLoverPage = () => {
  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: "url(./image/hello.jpg)",
      }}
    >
      <div className="text-center text-white">
        {/* Circular Card */}
        <div className="inline-block bg-black bg-opacity-60 p-10 rounded-full w-72 h-72 mb-6 ">
          <h2 className="text-4xl font-semibold mb-2">Food Lover</h2>
          <p className="text-lg">Explore Delicious Recipes</p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            veniam.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6">
          <button className="px-8 py-3  text-white font-semibold rounded-lg  bg-orange-400 hover:transparent   transition-colors mr-4">
            Visit Our page
          </button>
          <button className="px-8 py-3  text-white font-semibold rounded-lg  bg-gray-700  hover:transparent  transition-colors">
            About this site
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodLoverPage;
