import { ADDITION,SUBTRACTION } from "./type";

export const increment = ()=>{
    return{
        type:ADDITION
    }
}

export const decrement =()=>{
    return{
        type:SUBTRACTION
    }
}