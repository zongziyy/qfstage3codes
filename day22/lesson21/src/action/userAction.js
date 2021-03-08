import  actionType from  "./index";

let  initUserList=(playload)=>{

    return {
        type:actionType.USERLIST,
        playload
    }
}
let  addUserList=(playload)=>{
    return {
        type:actionType.USERADD,
        playload
    }
}

export {
    initUserList,
    addUserList
}