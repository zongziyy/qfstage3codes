import actionType from './index';

let initUserList = (payload) => {
    return {
        type: actionType.INITUSER,
        payload
    }
}

let addUser = (payload) => {
    return {
        type: actionType.ADDUSER,
        payload
    }
}
export {
    initUserList, addUser
}