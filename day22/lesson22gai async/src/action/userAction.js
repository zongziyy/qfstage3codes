import actionType from "./index";
import userModel from "../model/userModel"

let initUserList = (playload) => {
    return {
        type: actionType.INITUSERLIST,
        playload
    }
}
let asyncInitUserList = (playload) => {
    return async (dispatch) => {
        let { data: userList } = await userModel.query();
        dispatch(initUserList(userList))
    }

}

let addUser = (playload) => {
    return {
        type: actionType.ADDUSER,
        playload
    }
}
let asyncAddUser = (playload) => {

    return (dispatch) => {
        userModel.add(playload).then(res => {

            dispatch(addUser(res.data))
        })

    }


}
let deleteUser = (playload) => {
    return {
        type: actionType.DELETEUSER,
        playload
    }
}

let asyncDeleteUser = (playload) => {

    return (dispatch) => {

        userModel.del(playload).then(() => {
            dispatch(deleteUser(playload));
        })
    }

}

export {
    initUserList,
    addUser,
    deleteUser,
    asyncInitUserList,
    asyncAddUser,
    asyncDeleteUser
}