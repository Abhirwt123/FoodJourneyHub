import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import Letter from "./Letter";
import LetterMeals from "./LetterMeals";

const MealsDetail = () => {
  const [idData, setIdData] = useState();
  const getId = useContext(AppContext);
  console.log(getId.cardId);
  const fetchIdData = async () => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${getId.cardId}`
    );
    const res = await data.json();
    setIdData(res.meals[0]);
  };
  useEffect(() => {
    fetchIdData();
  }, []);
  console.log(idData);
  if(!idData) return;
  return (
    <div className="bg-amber-700 p-10">
      <div className="grid grid-cols-12">
        <div className="col-span-6">
            <img src={idData.strMealThumb} alt="img" />
        </div>
        <div className="col-span-6 text-white ">
         <p className="title text-start text-[4vh] font-bold py-2">{idData.strMeal}  <span className="text-[3vh] ms-4 px-4 py-1 bg-pink-600 text-white rounded-full">{idData.strCategory}</span></p>
         <div className="recipe border-t-2 py-2">
            <p className="text-[4vh] py-2">Recipe</p>
            <p className="text-base">{idData.strInstructions}</p>
         </div>
         <div className="border-t-2 py-2 ">
          <a href={idData.strYoutube} target="_blank">
          <div className="box ">
          <i className="fa-brands fa-youtube ps-4 text-4xl"></i>
          <p className="">Watch Recipe</p>
          </div>
          </a>
         </div>
        </div>
      </div>
      <LetterMeals/>
    </div>
  );
};

export default MealsDetail;
