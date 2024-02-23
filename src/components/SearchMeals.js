import React, { useEffect, useState } from 'react'
import Card from './Card';
import SearchBar from './SearchBar';
import ErrorImage from "../assets/images/error.png"

const SearchMeals = () => {
  const [searchText, setSearchText] = useState();
  const [text, setText] = useState("potato");
  const [searchData, setSearchData] = useState();
  const fetchLatestMelas = async () => {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`);
    const res = await data.json();
    // console.log(res.meals)
    setSearchData(res?.meals)
  }
  useEffect(() => {
    fetchLatestMelas()
  }, [text])
  const handelSearchMeal = () => {
    setText(searchText);
    setSearchText('')
  }
  console.log(searchData)
  return (
    <>
      <div className='bg-amber-700 pt-20'>
        <h2 className='text-center text-white text-4xl font-bold'>Search For a Meal</h2>
        <SearchBar handelSearchMeal={handelSearchMeal}
          setSearchText={setSearchText}
          searchText={searchText} />
      </div>
      <>
        {searchData ? <div className=' px-20 bg-amber-700 pb-6'>
          <div className='flex gap-8 flex-wrap justify-center'>
            {
              searchData.map((card,i) => {
                return (
                  <Card id={card.idMeal} key={i} title={card.strMeal} imgUrl={card.strMealThumb} />
                )
              })
            }
          </div>
        </div> :<div className=' flex flex-col gap-10 bg-amber-700 justify-center items-center pt-10'>
          <div className='img-wrap w-96'>
            <img src={ErrorImage} alt="error image"/>
          </div>
          <h1 className='text-center text-2xl  text-white pb-4'>No meals found with {text} name.... </h1>
        </div>
        }
      </>
    </>
  )
}

export default SearchMeals;
