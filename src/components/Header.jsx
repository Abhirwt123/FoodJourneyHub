import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate =useNavigate();
  const handelRedirect=()=>{
    navigate('/')
  }
  return (
    <div className="px-10 py-6 bg-amber-950">
      <div className="flex items-center lg:justify-between md:justify-between justify-center">
        <div className="logo cursor-pointer" onClick={handelRedirect}>
          <p className="text-xl font-bold text-orange-600">FoodJournayHub </p>
        </div>
        <div className="search-box">
          <ul className="gap-6 text-white lg:flex md:flex hidden">
            <li><Link to={'/categories'}>Categories</Link></li>
            <li><a href="#sMeal">SearchMeals</a></li>
            <li><a href="#rMeal">RandomMeals</a></li>
            <li><a href="#letter">SearchByLetter</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
