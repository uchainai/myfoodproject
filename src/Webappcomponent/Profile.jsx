// src/components/Profile.js
import React from "react";

const Profile = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex items-center space-x-6">
        {/* Profile Image */}
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-gray-300"
        />
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">John Doe</h2>
          <p className="text-gray-600">Web Developer</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
