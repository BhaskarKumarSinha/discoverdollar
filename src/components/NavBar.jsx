import React, { useState } from "react";
import categories from "./categories.json";

const Navbar = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [activeNestedSubcategory, setActiveNestedSubcategory] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCategoryMouseEnter = (categoryName) => {
    if (window.innerWidth >= 768) {
      setActiveCategory(categoryName);
    }
  };

  const handleCategoryMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setActiveCategory(null);
      setActiveSubcategory(null);
      setActiveNestedSubcategory(null);
    }
  };

  const handleSubcategoryMouseEnter = (subcategoryName) => {
    if (window.innerWidth >= 768) {
      setActiveSubcategory(subcategoryName);
      setActiveNestedSubcategory(null); // Reset nested subcategory on subcategory hover
    }
  };

  const handleSubcategoryMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setActiveSubcategory(null);
      setActiveNestedSubcategory(null);
    }
  };

  const handleNestedSubcategoryMouseEnter = (nestedSubcategoryName) => {
    if (window.innerWidth >= 768) {
      setActiveNestedSubcategory(nestedSubcategoryName);
    }
  };

  const handleNestedSubcategoryMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setActiveNestedSubcategory(null);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderNestedSubcategories = (nestedSubcategories) => (
    <div className="pl-4 mt-2 bg-white shadow-lg rounded-md p-2 z-50">
      {nestedSubcategories.map((nestedSubcategory, index) => (
        <div
          key={index}
          className="relative group p-2 hover:bg-blue-600 text-black rounded-md transition duration-300 ease-in-out"
          onMouseEnter={() =>
            handleNestedSubcategoryMouseEnter(nestedSubcategory.name)
          }
          onMouseLeave={handleNestedSubcategoryMouseLeave}
        >
          {nestedSubcategory.name}
          {activeNestedSubcategory === nestedSubcategory.name &&
            nestedSubcategory.subcategories && (
              <div className="absolute left-full top-0 mt-2 bg-white shadow-lg rounded-md p-2 z-50">
                {renderNestedSubcategories(nestedSubcategory.subcategories)}
              </div>
            )}
        </div>
      ))}
    </div>
  );

  const renderSubcategories = (subcategories) => (
    <div className="pl-2 mt-2 bg-white shadow-lg rounded-md p-2 z-50">
      {subcategories.map((subcategory, index) => (
        <div
          key={index}
          className="relative group p-2 hover:bg-blue-600 text-black rounded-md transition duration-300 ease-in-out"
          onMouseEnter={() => handleSubcategoryMouseEnter(subcategory.name)}
          onMouseLeave={handleSubcategoryMouseLeave}
        >
          {subcategory.name}
          {activeSubcategory === subcategory.name &&
            subcategory.subcategories && (
              <div className="absolute left-full top-0 mt-2 bg-white shadow-lg rounded-md p-2 z-50">
                {renderNestedSubcategories(subcategory.subcategories)}
              </div>
            )}
        </div>
      ))}
    </div>
  );

  return (
    <nav className="bg-blue-600 text-white p-4 w-full">
      <div className="flex items-center justify-between">
        <div className="hidden md:flex justify-evenly w-full space-x-8">
          {categories.categories.map((category, index) => (
            <div
              key={index}
              onMouseEnter={() => handleCategoryMouseEnter(category.name)}
              onMouseLeave={handleCategoryMouseLeave}
              className="relative p-2 cursor-pointer"
            >
              {category.name}
              {activeCategory === category.name && category.subcategories && (
                <div className="absolute left-full top-0 mt-1 bg-white shadow-lg rounded-md p-2 z-50">
                  {renderSubcategories(category.subcategories)}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="p-2 focus:outline-none">
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          {categories.categories.map((category, index) => (
            <div key={index} className="relative p-2 cursor-pointer">
              <div
                onClick={() =>
                  setActiveCategory(
                    activeCategory === category.name ? null : category.name
                  )
                }
                className="p-2 hover:bg-blue-700"
              >
                {category.name}
              </div>
              {activeCategory === category.name && category.subcategories && (
                <div className="ml-4 bg-white shadow-lg rounded-md p-2 z-50">
                  {renderSubcategories(category.subcategories)}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
