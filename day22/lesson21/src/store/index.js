import { createStore,combineReducers } from "redux";
import numReducer from "../reducer/numReducer";
import userReducer from "../reducer/userReducer";

let  store  = combineReducers({
    numInfo:numReducer,
    userInfo:userReducer
})
export default createStore(store);
