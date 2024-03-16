import { useState } from "react";
import { useEffect } from "react";
import Recipe from './recipe'

const recipies = () => {
    const [recipe,setRecipe] = useState([]);
    useEffect(()=>{
        fetch('recipes.json'),
        .then(res=>res.json()),
        .then(data=>setRecipe(data))
    },[])
    return (
        <div className="grid grid-cols-2 gap-4">
           
           {
                recipe.map(recipe=>(
                    <Recipe key={recipe.id} recipe={recipe}></Recipe>
                ))
            }
        </div>
    );
};

export default recipies;