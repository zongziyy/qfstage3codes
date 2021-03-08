import actionType from "./index";
import store from "../store";

let add = (playload) => {

    return {
        type: actionType.ADDNUM,
        playload
    }
}



let asyncAdd = (playload) => {

    return (dispatch) => {
        setTimeout(() => {
            dispatch(add(playload));
        }, 2000);
    }
}

let reduce = (playload) => {

    return {
        type: actionType.REDUCERNUM,
        playload
    }

}

export {
    add,
    reduce,
    asyncAdd
}