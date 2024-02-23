import React, { useEffect, useState } from 'react'
const FilterMeals = () => {
    const [categorie,setCategorie]=useState()
    const [searchData, setSearchData] = useState()
    const fetchCategories = async ()=>{
        const data =await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorie}`)
        const res =await data.json();
        setSearchData(res.meals)
    }
    useEffect(()=>{
fetchCategories()
    },[categorie])
    console.log(searchData)
  return (
    <div className='bg-amber-700  py-10'>
        <h1 className='text-[4vh] font-bold text-center text-white'>Filter Meals By Selecting there Categories</h1>
        <select value={categorie}  id="filterMeals" className='w-3/12 mx-auto block  mt-4 p-2' onChange={(e)=>setCategorie(e.target.value)}>
            <option value="select" selected>SELECT</option>
            <option value="Beef">Beef</option>
            <option value="Chicken">Chicken</option>
            <option value="Goat">Goat</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Starter">Starter</option>
            <option value="Side">Side</option>
            <option value="Seafood">Seafood</option>
            <option value="Pork">Pork</option>
            <option value="Pasta">Pasta</option>
            <option value="Miscellaneous">Miscellaneous</option>
            <option value="Lamb">Lamb</option>
            <option value="Dessert">Dessert</option>
        </select>
      <div className="mealCategoriesWrap">

      </div>
    </div>
  )
}

export default FilterMeals
