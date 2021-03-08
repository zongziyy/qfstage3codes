import thunk from "redux-thunk";
import {createStore,combineReducers,applyMiddleware} from "redux";
import  numInfo from "../reducer/numReducer";
import  userInfo  from  "../reducer/userReducer";
import  flagInfo from "../reducer/flagReducer";
//命名空间

let  store = combineReducers({
    numInfo,
    userInfo,
    flagInfo
})

export default  createStore(store,applyMiddleware(thunk));