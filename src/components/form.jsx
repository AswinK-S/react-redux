import { useState } from "react"
import { useDispatch } from "react-redux"
import { submitForm } from "../redux/form/formAction"

const Form = ()=>{
    const [name,setName] = useState('')
    const [age,setAge] = useState(0)

    const dispatch = useDispatch()
    return(
        <div className=" mt-2  flex flex-col ">
            <div >
            <label for='name' >name:</label> 
            <input className="ml-2" 
            name="name"
            type="text" placeholder="enter name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            </div>
           
            <div className="mt-2">
            <label for='age'>age :</label>
            <input
            className="ml-2"
            name="age"
            type="text"
            placeholder="enter age"
            value={age} 
            onChange ={(e)=> setAge(e.target.value)}
            />
            </div>
           

            <button 
            className="mt-4 mb-2"
            onClick={()=> dispatch(submitForm({name,age}))}
            > click me!</button>
        </div>
    )
}

export default Form