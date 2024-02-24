import React, { useCallback, useContext, useEffect, useState } from "react";
import Card from "./Card";

const RandomMeals = () => {
  const [searchData, setSearchData] = useState([]);

  const fetchLatestMeals = async () => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/random.php`
    );
    const res = await data.json();
    return res.meals[0];
  };

  const getData = async () => {
    const mealsArray = [];
    for (let index = 0; index < 5; index++) {
      const meal = await fetchLatestMeals();
      mealsArray.push(meal);
    }
    setSearchData(mealsArray);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!searchData || searchData.length === 0) return null;

  return (
    <div id="rMeal">
      <h1 className="text-[6vh] text-white text-center font-bold bg-amber-700 pt-20">
        Random Meals
      </h1>
      <div className="bg-amber-700 px-10 flex gap-8 justify-center pt-20 flex-wrap">
        {searchData.map((card) => (
          <Card
           id={card.idMeal}
            key={card.idMeal}
            title={card.strMeal}
            imgUrl={card.strMealThumb}
          />
        ))}
      </div>
    </div>
  );
};

export default RandomMeals;
