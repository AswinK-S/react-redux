import { combineReducers } from "redux";
import reducer from './counter/reducer'
import formReducer from "./form/formReducer";

const rootReducer = combineReducers({
    counter:reducer,
    form:formReducer
})

export default rootReducer