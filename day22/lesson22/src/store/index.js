import {createStore,combineReducers} from "redux";
import  numInfo from "../reducer/numReducer";
//命名空间

let  store = combineReducers({
    numInfo
})

export default  createStore(store);