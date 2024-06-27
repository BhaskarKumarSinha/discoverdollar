import React from "react";
import HouseHoldCard from "./HouseHoldCard.jsx";
import data from "./households.json";

const HouseHoldsComponents = () => {
  return (
    <>
      <h1 className="text-center font-bold text-3xl mt-8 mb-5 sm:text-xl md:text-3xl">
        HouseHolds Items
      </h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.components.map((component) => (
          <HouseHoldCard
            key={component.id}
            name={component.name}
            description={component.description}
            imageUrl={component.imageUrl}
          />
        ))}
      </div>
    </>
  );
};

export default HouseHoldsComponents;
