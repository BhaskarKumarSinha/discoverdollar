// Card.jsx

import React from "react";

const Card = ({ title, description, imageUrl, extraStyle }) => {
  return (
    <div
      className={`max-w-xs rounded overflow-hidden shadow-lg bg-white relative transform hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition duration-300 ${extraStyle}`}
    >
      <img
        className="w-full h-40 object-cover"
        src={process.env.PUBLIC_URL + imageUrl}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      {/* Extra shadow effect at the bottom */}
      <div className="absolute inset-x-0 bottom-0 h-2 bg-gray-800 transform origin-bottom scale-y-0 transition-transform duration-300 group-hover:scale-y-100"></div>
    </div>
  );
};

export default Card;
