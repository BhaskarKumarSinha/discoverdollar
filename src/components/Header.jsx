import React, { useState } from "react";
import categoriesData from "./categories.json";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    if (query) {
      const results = searchCategories(categoriesData.categories, query);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const searchCategories = (categories, query) => {
    let results = [];
    for (const category of categories) {
      if (category.name && category.name.toLowerCase().includes(query)) {
        results.push(category.name);
      }
      if (category.subcategories && category.subcategories.length > 0) {
        const subcategoryResults = searchCategories(
          category.subcategories,
          query
        );
        results = results.concat(subcategoryResults);
      }
    }
    return results;
  };

  return (
    <header className=" text-black p-4 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <a href="/" className="text-black text-2xl font-bold flex items-center">
          <img
            src="/assets/logo1.png"
            alt="Logo"
            className="h-8 w-8 mr-2 inline-block"
          />
          ShoppingSite
        </a>
      </div>

      {/* Search Section */}
      <div className="flex-1 mx-36 relative">
        <input
          type="text"
          placeholder="Search for products..."
          className=" border-2 p-2 rounded-md text-black w-[75%]"
          value={searchQuery}
          onChange={handleSearch}
        />
        {searchResults.length > 0 && (
          <ul className="absolute bg-white text-black w-full mt-2 p-2 rounded-md shadow-md max-h-60 overflow-y-auto">
            {searchResults.map((result, index) => (
              <li key={index} className="p-2 hover:bg-gray-200 cursor-pointer">
                {result}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Cart Section */}
      <div className="mr-8">
        <a href="/cart" className="text-black flex items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.401 2.41M7 13h10l4-8H5.401M7 13l-1.758 3.516M7 13L6.401 11H3M21 21a2 2 0 100-4 2 2 0 000 4zM7 21a2 2 0 100-4 2 2 0 000 4z"
            />
          </svg>
          Cart
        </a>
      </div>
    </header>
  );
};

export default Header;
