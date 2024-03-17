

const cart = ({ item, handleDelete, cook }) => {
    const totalPreparingTime = cook.reduce((p, c) => {
        const timeInMinutes = parseInt(c.preparing_time.split(" ")[0]);
        return p + timeInMinutes;
    }, 0);
    const totalCalore = cook.reduce((p,c)=>{
        const caloreInString = parseInt(c.calories.split(" " [0]));
        return p + caloreInString
    },0)
    return (
        <div className=" p-8 bg-white shadow-xl border-2 rounded-xl">
            <h1 className="text-xl font-bold text-center">Want to cook: {item.length}</h1>
            <hr className="my-2 w-[80%] h-[2px] bg-gray-300 mx-auto" />
            <div className="flex bg-gray-100 p-4 rounded-xl w-full">
                <table className="w-full">
                    <tr className="flex justify-between items-start w-full">
                        <th className="w-[20px] md:w-[30px] text-start"></th>
                        <th className="w-[90px] md:w-[100px] text-start">Name</th>
                        <th className="w-[65px] md:w-[75px] text-start">Time</th>
                        <th className="w-[80px] md:w-[90px] text-start">Calories</th>
                        <th className="w-[90px] md:w-[100px] text-start"></th>
                    </tr>
                    <tr className="w-full">
                        {
                            item.map((food, index) => (
                                <tr key={food.id} className="flex justify-between lg:justify-evenly items-start w-full">
                                    <td className="w-[20px] md:w-[30px] text-start">{index + 1}</td>
                                    <td className="w-[90px] md:w-[100px] text-start">{food.name.slice(0, 14)}</td>
                                    <td className="w-[65px] md:w-[75px] text-start">{food.preparing_time.slice(0, 6)}</td>
                                    <td className="w-[80px] md:w-[90px] text-start">{food.calories.slice(0, 7)}</td>
                                    <td className="w-[90px] lg:w-[100px] text-start">
                                        <button onClick={() => handleDelete(food.id, food)} className="btn rounded-full px-4 text-white bg-green-500 hover:bg-green-500 ">Preparing</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tr>
                </table>
            </div>
            <h1 className="text-xl font-bold text-center">Currently cooking:{cook.length}</h1>
            <hr className="my-2 w-[80%] h-[2px] bg-gray-300 mx-auto" />
            <div className="flex bg-gray-100 p-4 rounded-xl w-full">
                <table className="w-full">
                    <tr className="flex justify-evenly items-center w-full">
                        <th className="w-[30px] text-start"></th>
                        <th className="w-[100px] text-start">Name</th>
                        <th className="w-[100px] text-start">Time</th>
                        <th className="w-[100px] text-start">Calories</th>
                    </tr>
                    <tr className="w-full">
                        {
                            cook.map((food, index) => (
                                <tr key={food.id} className="flex justify-evenly items-center w-full">
                                    <td className="w-[30px] text-start">{index + 1}</td>
                                    <td className="w-[100px] text-start">{food.name.slice(0, 14)}</td>
                                    <td className="w-[100px] text-start">{food.preparing_time.slice(0, 6)}</td>
                                    <td className="w-[100px] text-start">{food.calories.slice(0, 7)}</td>
                                </tr>
                            ))
                        }
                    </tr>
                </table>
            </div>
            <div className="flex justify-between my-2 items-center text-lg font-medium">
                <h1>Total Time = {totalPreparingTime} min</h1>
                <h1>Total Calories = {totalCalore} cal</h1>
            </div>
        </div>
    );
};

export default cart;