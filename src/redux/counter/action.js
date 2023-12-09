import { ADDITION,MULTIPLICATION,SUBTRACTION } from "./type";

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

export const multiplication = (num)=>{
    return{
        type:MULTIPLICATION,
        payload:num
    }
}