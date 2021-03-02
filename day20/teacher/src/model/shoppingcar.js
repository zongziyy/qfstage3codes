import  axios from "./axios";


export  default  {
    list:()=>{
        return  axios({
            method:"get",
            url:"/api/shoppingcar"
        })
    }
}