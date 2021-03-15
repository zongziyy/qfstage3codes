import  actionType from "../action"

let  flagReducer =(state={flag:true},action)=>{
    switch (action.type) {
        case actionType.CHANGEFLAG:
            return  {flag:action.playload}

    }


    return  state;
}
export  default  flagReducer;