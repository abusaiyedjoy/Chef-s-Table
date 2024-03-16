import { useState } from "react";
import { useEffect } from "react";
import Recipe from './recipe'

const recipies = () => {
    const [recipe,setRecipe] =useState([]);
    useEffect(()=>{
        fetch('recipes.json')
        .then(res=>res.json())
        .then(data=>setRecipe(data))
    },[])
    console.log(recipe)
    return (
        <div>
            {
                recipe.map(recipe=>(
                    <Recipe key={recipe.id} recipe={recipe}></Recipe>
                ))
            }
        </div>
    );
};

export default recipies;