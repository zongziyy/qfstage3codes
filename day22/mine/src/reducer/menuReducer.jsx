import actionType from '../actions/index'

let menuReducer = (state = { list: [] }, action) => {
    switch (action.type) {
        case actionType.INITMENU:
            return { list: action.payload };

        case actionType.ADDMENU:
            return { list: [...state.list, action.payload] };
    }
    return state
}

export default menuReducer
