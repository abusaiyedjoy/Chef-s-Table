import { useState } from "react";
import { useEffect } from "react";
import Recipe from './recipe'

const recipies = ({ cartItem }) => {
    // console.log(cartItem)
    const [recipes, setRecipe] = useState([]);
    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipe(data))
    }, [])
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

            {
                recipes.map(recipe => (
                    <Recipe key={recipe.id}
                        cartItem={cartItem}
                        recipe={recipe}></Recipe>
                ))
            }
        </div>
    );
};

export default recipies;