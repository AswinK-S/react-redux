import { SUBMIT_FORM } from "./formType"


export const submitForm = ({name,age})=>{
    return{
        type:SUBMIT_FORM,
        // payload:{name,age}
        name,
        age
    }
}