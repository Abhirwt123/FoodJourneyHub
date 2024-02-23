import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate =useNavigate();
  const handelRedirect=()=>{
    navigate('/')
  }
  return (
    <div className="px-10 py-6 bg-amber-950">
      <div className="flex items-center justify-between">
        <div className="logo cursor-pointer" onClick={handelRedirect}>
          <p className="text-xl font-bold text-orange-600">FoodJournayHub </p>
        </div>
        <div className="search-box">
          <form action="#">
            <input type="text" className="px-4 py-2 rounded-s-full" />
            <button
              type="submit"
              className="px-4 py-2 bg-orange-600 text-white rounded-e-full"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
