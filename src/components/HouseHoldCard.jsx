// HouseholdCard.jsx

import React from "react";

const HouseHoldCard = ({ name, description, imageUrl }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white relative transform hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition duration-300">
      <img className="w-full h-40 object-cover" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      {/* Extra shadow effect at the bottom */}
      <div className="absolute inset-x-0 bottom-0 h-2 bg-gray-300 transform origin-bottom scale-y-0 transition-transform duration-300 group-hover:scale-y-100"></div>
    </div>
  );
};

export default HouseHoldCard;
