import React, { useEffect, useState } from 'react'
import Card from './Card';

const SearchMeals = () => {
  const [searchText, setSearchText] = useState();
  const [text, setText] = useState("potato");
  const [searchData, setSearchData] = useState();
  const fetchLatestMelas = async () => {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`);
    const res = await data.json();
    console.log(res.meals)
    setSearchData(res?.meals)
  }
  useEffect(() => {
    fetchLatestMelas()
  }, [text])
  const handelSearchMeal = () => {
    setText(searchText);
    setSearchText('')
  }
  if (!searchData) return (
    <h1 className='px-20 py-4 bg-amber-700'> Data not found...</h1>
  );
  return (
    <div className='pt-20 px-20 bg-amber-700 py-6'>
      <h2 className='text-center text-white text-4xl font-bold'>Search For a Meal</h2>
      <div className="search-box text-center mt-4">
        <div>
          <input type="text"
            value={searchText}
            className="px-4 py-2 rounded-s-full w-5/12"
            onChange={(e) => {
              setSearchText(e.target.value)
            }} />
          <button
            type="submit"
            className="px-6 py-2 bg-orange-600 text-white rounded-e-full"
            onClick={handelSearchMeal}
          >
            Search
          </button>
        </div>
      </div>
      <div className='flex gap-8 flex-wrap justify-center'>
        {
          searchData.map((card) => {
            return (
              <Card title={card.strMeal} imgUrl={card.strMealThumb} />
            )
          })
        }
      </div>
    </div>
  )
}

export default SearchMeals;
