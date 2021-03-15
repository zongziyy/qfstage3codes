import  actionType from "../action";

let  numReducer = (state={num:10},action)=>{
    switch (action.type) {
        case actionType.ADDNUM:
            return {num:state.num+action.playload};
        case actionType.REDUCERNUM:
            return {num:state.num-action.playload};    
    }

    return  state;
}

export  default numReducer;