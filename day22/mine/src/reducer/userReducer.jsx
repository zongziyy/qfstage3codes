import actionType from '../actions/index'

let userReducer = (state = { list: [] }, action) => {
    switch (action.type) {
        case actionType.INITUSER:
            return { list: action.payload };
        case actionType.ADDUSER:
            return { list: [...state.list, action.payload] }

    }
    return state;
}

export default userReducer;