import { combineReducers } from "redux";
import contactReducer from "./reducers";

export default combineReducers({
    contact: contactReducer,
})