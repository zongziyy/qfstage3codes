import actionType from "./index";

let  addNum=(playload)=>{
    return {
        type:actionType.NUMADD,
        playload
    }
}
let  reduceNum=(playload)=>{
    return {
        type:actionType.NUMREDUCER,
        playload
    }
}
export {
    addNum,
    reduceNum
}
