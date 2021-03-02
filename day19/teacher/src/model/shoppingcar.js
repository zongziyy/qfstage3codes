import  axios from "./axios";


export  default  {
    list:()=>{
        return  axios({
            method:"get",
            url:"http://localhost:3456/shoppingcar"
        })
    }
}