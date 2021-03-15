import  actionType from "./index"

let  changeFlag =(playload)=>{
    return  {
        type:actionType.CHANGEFLAG,
        playload
    }
}

export {
    changeFlag
}