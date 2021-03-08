import actionType from './index'

let initMenuList = (payload) => {
    return {
        type: actionType.INITMENU,
        payload
    }
}

let addMenu = (payload) => {
    return {
        type: actionType.ADDMENU,
        payload
    }
}

export { initMenuList, addMenu }