import actionType from './index'

let changeMenuFlag = (payload) => {
    return {
        type: actionType.CHANGEMENUFLAG,
        payload
    }
}

export { changeMenuFlag }