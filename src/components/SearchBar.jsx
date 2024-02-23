import React from "react";

const SearchBar = ({handelSearchMeal,setSearchText,searchText}) => {
  return (
    <div className="search-box text-center mt-4">
      <div>
        <input
          type="text"
          value={searchText}
          className="px-4 py-2 rounded-s-full w-5/12"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          type="submit"
          className="px-6 py-2 bg-orange-600 text-white rounded-e-full"
          onClick={handelSearchMeal}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
