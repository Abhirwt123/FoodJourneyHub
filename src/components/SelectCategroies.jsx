import React from 'react'

const SelectCategroies = ({ categorie, setCategorie }) => {
    return (
        <div>
            <select value={categorie}
                id="filterMeals"
                className='w-3/12 mx-auto block  mt-4 p-2 bg-amber-950 text-white rounded-lg border-none outline-none'
                onChange={(e) => setCategorie(e.target.value)}>
                <option value="select" selected>SELECT</option>
                {["Beef", "Chicken", "Goat", "Breakfast", "Vegetarian", "Vegan", "Starter", "Side", "Seafood", "Pork", "Pasta", "Miscellaneous", "Lamb", "Dessert"].map((elm) => <option value={elm}>{elm}</option>)}
            </select>
        </div>
    )
}

export default SelectCategroies
