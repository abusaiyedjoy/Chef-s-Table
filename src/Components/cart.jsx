

const cart = () => {
    return (
        <div className=" p-8 bg-white shadow-xl border-2 rounded-xl">
            <h1 className="text-xl font-bold text-center">Want to cook: 01</h1>
            <hr className="my-2 w-[80%] h-[2px] bg-gray-300 mx-auto" />
            <div className="flex bg-gray-100 p-4 rounded-xl w-full">
                <table className="w-full">
                    <th className="flex justify-around w-full">
                        <td>Name</td>
                        <td>Time</td>
                        <td>Calories</td>
                    </th>
                    <tbody className="w-full flex">
                        <tr className="flex justify-evenly w-full">
                            <td>fgh</td>
                            <td>fgdh</td>
                            <td>dfh</td>

                        </tr>
                        <button className="btn text-lg rounded-full p-2 bg-indigo-400 ">Preparing</button>
                    </tbody>
                </table>
            </div>
            <h1 className="text-xl font-bold text-center">Currently cooking: 02</h1>
            <hr className="my-2 w-[80%] h-[2px] bg-gray-300 mx-auto" />
            <div className="flex bg-gray-100 p-4 min-h-12 my-4 rounded-xl w-full">
                <th className="flex justify-around w-full">
                    <td>Name</td>
                    <td>Time</td>
                    <td>Calories</td>
                </th>
            </div>
            <div className="flex justify-between items-center text-lg font-medium">
                <h1>Total Time = 45 min</h1>
                <h1>Total Calories = 1050 cal</h1>
            </div>
        </div>
    );
};

export default cart;