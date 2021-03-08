import  actionType from "./index";

let  add=(playload)=>{

    return {
        type:actionType.ADDNUM,
        playload
    }

}

let  reduce=(playload)=>{

    return  {
        type:actionType.REDUCERNUM,
        playload
    }

}

export {
    add,
    reduce
}

