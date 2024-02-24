import React, { useEffect, useState } from 'react';
import Card from "./Card"
import SelectCategroies from './SelectCategroies';
const FilterMeals = () => {
  const [categorie, setCategorie] = useState()
  const [searchData, setSearchData] = useState()
  const fetchCategories = async () => {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorie}`)
    const res = await data.json();
    setSearchData(res.meals)
  }
  useEffect(() => {
    fetchCategories()
  }, [categorie])
  // console.log(searchData)
  // if (!searchData) return;
  return (
    <div className='bg-amber-700  py-10 min-h-screen'>
      <h1 className='text-[4vh] font-bold text-center text-white'>Filter Meals By Selecting there Categories</h1><SelectCategroies categorie={categorie} setCategorie={setCategorie} />
      {searchData ? <div className="mealCategoriesWrap px-20 flex flex-wrap gap-8 justify-center">
        {searchData.map((crd, i) => <Card id={crd.idMeal} key={i} title={crd.strMeal} imgUrl={crd.strMealThumb} />)}
      </div> : null}
    </div>
  )
}

export default FilterMeals
