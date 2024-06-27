import React from "react";
import data from "./electronoics.json";
import Card from "./card";

const CardComponents = () => {
  return (
    <>
      <h1 className="text-center font-bold text-3xl mt-4 mb-5 sm:text-xl md:text-3xl">
        Electronics Items
      </h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            extraStyle="bg-blue-100 border-2 border-blue-50"
          />
        ))}
      </div>
    </>
  );
};

export default CardComponents;
