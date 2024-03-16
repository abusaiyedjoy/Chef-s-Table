import Ingredients from "./ingredients";
const recipe = (recipe) => {
    const { name, image, description, preparing_time, calories, ingredients } = recipe.recipe;
    return (
        <div>
            <div className="rounded-xl text-black border-2 shadow-xl">
                <figure className="p-4">
                    <img src={image} alt={name} className="rounded-xl h-[196px] w-full object-center" />
                </figure>
                <div className="card-body text-start px-4">
                    <h2 className="text-xl font-bold">{name}</h2>
                    <p>{description}</p>
                    <hr className="my-2" />
                    <h1 className="text-xl font-bold">Ingredients: {ingredients.length}</h1>
                    <ul><li className="grid grid-cols-2">
                    {
                        ingredients.map(item=>(
                        <Ingredients key={recipe.id} item={item} ></Ingredients>
                        ))
                    }
                    </li></ul>
                    <hr className="my-2" />
                    <div className="flex justify-between">
                        <h1 className="flex justify-center item-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                            {preparing_time}</h1>
                        <h1 className="flex justify-center item-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                        </svg>
                            {calories}</h1>
                    </div>
                    <button className="btn bg-green-500 rounded-full hover:bg-green-500 text-white mt-2 w-[70%] mx-auto text-2xl font-medium">Want to cook</button>

                </div>
            </div>
        </div>
    );
};

export default recipe;