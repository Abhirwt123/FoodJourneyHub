import React from "react";
import Home from "./Home";
import SearchMeals from "./SearchMeals";
import LetterMeals from "./LetterMeals";
import RandomMeals from "./RandomMeals";

const Layout = () => {
  return (
    <div>
      <Home />
      <SearchMeals />
      <div className=''>
       <RandomMeals />
      </div>
      <LetterMeals />
    </div>
  );
};

export default Layout;
