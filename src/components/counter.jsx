import React from "react";
import { increment, decrement } from "../redux/counter/action";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
    const result = useSelector((state) => state.result)
    const dispatch = useDispatch()
    return (
        <div className="bg-gray-200 rounded-md shadow-md py-10 px-10 flex flex-col items-center justify-center text-center">
            <div className="bg-gray-400 mb-3 w-10 text-white font-medium rounded">
                {result}
            </div>

            <div className="flex">
                <button
                    onClick={() => { dispatch(increment()) }}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                    Increment
                </button>

                <button
                    onClick={() => { dispatch(decrement()) }}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                    Decrement
                </button>
            </div>
        </div>

    )
}

export default Counter