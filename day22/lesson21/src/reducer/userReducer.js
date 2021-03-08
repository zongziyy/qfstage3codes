import  actionType from "../action";
let userReducer = (state = { list: [] }, action) => {
    switch (action.type) {
        case actionType.USERLIST: //放用户列表的数据
            return  {list:action.playload}
        case actionType.USERADD:
            return {list:[...state.list,action.playload]}    
    }

    return state;
}

export  default userReducer;