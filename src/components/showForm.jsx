import React from "react";
import { useSelector } from "react-redux";

const ShowForm = ()=>{

    // const name = useSelector((state)=> state.form.name)
    // const age = useSelector((state)=> state.form.age)

    const {name,age} = useSelector((state)=>state.form)
    return(
        <div className="mt-2">
            <p>Name :{name}</p>
            <p>Age : {age}</p>
        </div>
    )
}

export default ShowForm