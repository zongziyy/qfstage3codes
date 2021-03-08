import actionType from "../action";

let numReducer = (state = { num: 10 }, action) => {
    switch (action.type) {
        case actionType.NUMADD:
            return { num: state.num + action.playload }
        case actionType.NUMREDUCER:
            return { num: state.num - action.playload }
    }
    return state;
}
export default numReducer;