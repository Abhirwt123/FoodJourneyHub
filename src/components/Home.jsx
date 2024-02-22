import React from "react";
import FoodImage from "../assets/images/Home.jpg";
import BowlImage from "../assets/images/bowl.png"

const Home = () => {
  return (
    <div className="px-24 pt-10 bg-amber-700">
      <div className="grid grid-cols-12 ">
        <div className="col-span-5 relative text-white">
          <h1 className="title text-[8vh] text-start">
            Welcome to Food Journey Hub
          </h1>
          <h1 className="text-[5vh] title mt-10">
            An open, crowd sourced database of Recipes from around the world.
          </h1>
          <div className="overlay absolute w-[40%] end-[-40%] -bottom-20">
            <img src={BowlImage} alt="bowl" className="drop-shadow-2xl" />
          </div>
        </div>
        <div className="col-span-7">
          <div className="img-wrap w-9/12 ms-auto">
            <img src={FoodImage} alt="Food image l"  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
