import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { AppContext } from "../context/AppContext";
import ErrorImage from "../assets/images/error.png";

const Letter = () => {
  const text = useContext(AppContext);
//   console.log(text.letter);
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLatestMeals = async () => {
    try {
      const response = await fetch(`http://www.themealdb.com/api/json/v1/1/search.php?f=${text.letter}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
    //   console.log(data);
      setSearchData(data.meals || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setSearchData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLatestMeals();
  }, [text.letter]);
// console.log(searchData)
  if (loading) {
    return <div className="text-center bg-amber-700 text-white">Loading...</div>;
  }

  return searchData.length ? (
    <div className="px-20 py-10 bg-amber-700 min-h-screen">
      <div className="flex gap-8 flex-wrap justify-center">
        {searchData.map((card, index) => (
          <Card key={index} title={card.strMeal} imgUrl={card.strMealThumb} />
        ))}
      </div>
    </div>
  ) : (
    <div className="wrap flex flex-col gap-4 bg-amber-700 h-screen justify-center items-center">
      <img className="w-[40%]" src={ErrorImage} alt="error" />
      <h1 className="text-4xl text-white font-bold">
        No meals found with letter {text.letter}....
      </h1>
    </div>
  );
};

export default Letter;
