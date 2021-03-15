import  actionType from  "../action";

let  menuReducer = (state={list:[]},action)=>{
    switch (action.type) {
        case actionType.INITMENULIST:
            return  {list:action.playload}

        case actionType.ADDMENU:
            return {list:[...state.list,action.playload]}    
    
        default:
            break;
    }


    return state;

}

export default menuReducer;