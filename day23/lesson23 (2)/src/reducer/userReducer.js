import actionType from "../action/index";
let userReduer = (state = { list: []},action) => {
    switch (action.type) {
        case actionType.INITUSERLIST://初始化的方法
            return { list: action.playload }
        case actionType.ADDUSER:
            return  {list:[...state.list,action.playload]}
        case  actionType.DELETEUSER:
            return  {list:state.list.filter(item=>item.id!=action.playload)}    
    }



    return state;

}
export default userReduer;