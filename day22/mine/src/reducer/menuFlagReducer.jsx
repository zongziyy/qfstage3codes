import actionType from '../actions/index'

let menuFlagReducer = (state = { flag: true }, action) => {
    switch (action.type) {
        case actionType.CHANGEMENUFLAG:
            return {
                flag: action.payload
            }
    }
    return state
}

export default menuFlagReducer;