import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from '../reducer/userReducer';
import menuReducer from '../reducer/menuReducer';
import menuFlagReducer from '../reducer/menuFlagReducer';


let store = combineReducers({
    userInfo: userReducer,
    menuInfo: menuReducer,
    menuFlag: menuFlagReducer
})

export default createStore(store, applyMiddleware(thunk));