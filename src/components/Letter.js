import React, { useContext, useEffect, useState } from 'react'
import Card from './Card';
import { AppContext } from '../context/AppContext';

const Letter = () => {
    const text = useContext(AppContext);
    console.log(text.letter)
    const [searchData, setSearchData] = useState()
    const fetchLatestMelas = async () => {
        const data = await fetch(`http://www.themealdb.com/api/json/v1/1/search.php?f=${text.letter}`);
        const res = await data.json();
        console.log(res.meals)
        setSearchData(res?.meals)
    }
    useEffect(() => {
        fetchLatestMelas()
    }, [])
    console.log(searchData)
    if(!searchData) return;
    return (
        <div className='px-20 py-10 bg-amber-700 min-h-screen'>
        <div className='flex gap-8 flex-wrap justify-center'>
            {
                searchData.map((card)=><Card title={card.strMeal} imgUrl={card.strMealThumb}/>)
            }

        </div>
        </div>
    )
}

export default Letter
