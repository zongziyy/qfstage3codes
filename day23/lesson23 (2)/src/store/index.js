import thunk from "redux-thunk";//saga
import {createStore,combineReducers,applyMiddleware} from "redux";
import  numInfo from "../reducer/numReducer";
import  userInfo  from  "../reducer/userReducer";
import  flagInfo from "../reducer/flagReducer";
import  menuInfo from "../reducer/menuReducer";
//命名空间

let  store = combineReducers({
    numInfo,
    userInfo,
    flagInfo,
    menuInfo
})

export default  createStore(store,applyMiddleware(thunk));