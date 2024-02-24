import React from "react";
import FoodImage from "../assets/images/Home.jpg";
import FoodImage1 from "../assets/images/Home2.jpg";
import FoodImage2 from "../assets/images/Home3.jpg";
import FoodImage3 from "../assets/images/Home4.jpg";
import BowlImage from "../assets/images/bowl.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate =useNavigate()
  const FoodImages =[FoodImage,FoodImage1,FoodImage2,FoodImage3];
  const RandomImage=(Math.floor(Math.random()*3));
  const getImage=FoodImages[RandomImage];
  // console.log(RandomImage)
const handelCategoriesRedirect=()=>{
 navigate('/categories')
}
  return (
    <div className="lg:px-24 md:px-16 px-6 lg:pt-10 pt-0 lg:py-0 py-8 bg-amber-700">
      <div className="grid grid-cols-12 items-center gap-4">
        <div className="lg:col-span-5  col-span-12 relative  pt-10">
          <h1 className="title text-[7vh] text-start text-white leading-[54px]">
            Welcome to Food Journey Hub
          </h1>
          <h1 className="text-[3vh] title mt-8 text-white ">
            A global, crowd sourced recipe database featuring diverse dishes
            from around the world. Explore a rich tapestry of flavors,
            techniques, and cultural influences shared by passionate cooks. An
            open platform fostering culinary exploration and a vibrant exchange
            of ideas.
          </h1>
          <div className="overlay absolute w-[40%] end-[-40%] -bottom-20">
            <img src={BowlImage} alt="bowl" className="drop-shadow-2xl" />
          </div>
          <div className="btn-wrap mt-8 flex flex-wrap gap-4">
            <a href="#letter">
              <button className="px-4 py-3  text-white text-lg rounded-full">
                <span className="z-50 relative">Search By Letter</span>
              </button>
            </a>
            <button className="px-4 py-3  text-white text-lg rounded-full" onClick={handelCategoriesRedirect}>
                <span className="z-50 relative">Filter meals by categories</span>
              </button>
          </div>
        </div>
        <div className="lg:col-span-7  col-span-12">
          <div className="img-wrap lg:w-9/12 w-full ms-auto rounded-2xl overflow-hidden">
            <img src={getImage} alt="Food " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
