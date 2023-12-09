import { SUBTRACTION,ADDITION, MULTIPLICATION } from "./type";

const initialState = {
    result:0,
    result2:2
}

const counter =(state=initialState,action)=>{
 console.log(action)
    switch(action.type){
        case ADDITION:
            return{
                ...state,
                result:state.result +2
            }
        case SUBTRACTION:
            return{
                ...state,
                result:state.result -2
            }    
        case MULTIPLICATION:
            return{
                ...state,
                result2:state.result2*action.payload
            }    

        default:
            return state    
    }
}

export default counter