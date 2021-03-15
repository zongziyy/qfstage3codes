import  actionType from "./index"
import  menuModel from  "../model/menuModel";

let  initMenuList = (playload)=>{
    return {
        type:actionType.INITMENULIST,
        playload
    }
}
let asyncInitMenuList = (playload)=>{

    return async (dispatch)=>{

       let {data:menuList} =await menuModel.query();

       dispatch(initMenuList(menuList))
       

    }

}

let  addMenu = (playload)=>{
    return  {
        type:actionType.ADDMENU,
        playload
    }

}
let  asyncAddMenu =(playload,resolve)=>{
    return   (dispatch)=>{
        menuModel.add(playload).then(res=>{
            dispatch(addMenu(res.data));
            if(resolve){
                resolve();
            }
        })

    }

}

export {
    initMenuList,
    asyncInitMenuList,
    addMenu,
    asyncAddMenu

}