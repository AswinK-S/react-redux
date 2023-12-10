import { SUBMIT_FORM } from "./formType"

const initialState = {
    name:'empty',
    age:0
}

const formReducer =(state=initialState,{type,name,age})=>{

    switch(type){
        case SUBMIT_FORM:
            return{
                ...state,
                name,
                age
            }
        default:
            return state
    }
}

export default formReducer