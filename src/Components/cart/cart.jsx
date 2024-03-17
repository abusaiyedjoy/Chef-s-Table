

const cart = ({item}) => {
    console.log(item)
    return (
        <div className=" p-8 bg-white shadow-xl border-2 rounded-xl">
            <h1 className="text-xl font-bold text-center">Want to cook: 01</h1>
            <hr className="my-2 w-[80%] h-[2px] bg-gray-300 mx-auto" />
            <div className="flex bg-gray-100 p-4 rounded-xl w-full">
                <table className="w-full">
                    <tr className="flex justify-around w-full">
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                    <tr>
                    {
                        item.map(food=>(
                        <tr key={food.id}>
                        <td>{food.name}</td>
                        <td>{food.preparing_time}</td>
                        <td>{food.calories}</td>

                        <button className="btn ml-4 rounded-full px-4 text-white bg-green-500 hover:bg-green-500 ">Preparing</button>
                    </tr>
                        ))
                    }
                    </tr>
                </table>
            </div>
            <h1 className="text-xl font-bold text-center">Currently cooking: 02</h1>
            <hr className="my-2 w-[80%] h-[2px] bg-gray-300 mx-auto" />
            <div className="flex bg-gray-100 p-4 rounded-xl w-full">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>                   
                </table>
            </div>
            <div className="flex justify-between items-center text-lg font-medium">
                <h1>Total Time = 45 min</h1>
                <h1>Total Calories = 1050 cal</h1>
            </div>
        </div>
    );
};

export default cart;