import { SUBTRACTION,ADDITION } from "./type";

const initialState = {
    result:0
}

const counter =(state=initialState,action)=>{
 console.log(action)
    switch(action.type){
        case ADDITION:
            return{
                result:state.result +2
            }
        case SUBTRACTION:
            return{
                result:state.result -2
            }    

        default:
            return state    
    }
}

export default counter