import React from "react";
import { increment, decrement, multiplication, division } from "../redux/counter/action";
import { useDispatch, useSelector } from "react-redux";
import Form from "./form";
import ShowForm from "./showForm";

function Counter() {
    const result = useSelector((state) => state.counter.result)
    const result2 = useSelector((state) => state.counter.result2)
    const dispatch = useDispatch()
    return (
        <div className="bg-gray-200 rounded-md shadow-md py-10 px-10 flex flex-col items-center justify-center text-center">
            <div className=" text-black font-medium p-2">
            Redux
            </div>
            <div className="border border-blue-400 rounded p-2 mb-2">
                <div className="bg-gray-400 mb-3  text-white font-medium rounded p-2">
                   Addition & substraction of 2 = {result}
                </div>
                <div className="bg-gray-400 mb-3  text-white font-medium rounded p-2">
                    Multiplication & Substraction of 2 = {result2}
                </div>
            </div>


            <div className="border border-blue-400 p-3 rounded">
                <div className="flex mb-2">
                    <button
                        onClick={() => { dispatch(increment()) }}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    >
                        Increment
                    </button>

                    <button
                        onClick={() => { dispatch(decrement()) }}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                    >
                        Decrement
                    </button>


                </div>

                <div className="flex ">
                    <button
                        onClick={() => { dispatch(multiplication(2)) }}
                        className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2 ">
                        Multiplication
                    </button>

                    <button
                        onClick={() => { dispatch(division()) }}
                        className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded ">
                        Division
                    </button>
                </div>
            </div>

            <Form />
            <ShowForm />


        </div>

    )
}

export default Counter