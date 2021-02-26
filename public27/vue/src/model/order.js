import  axios from  "./axios.js";
import  qs  from  "qs";

var  orderInfo = {
    add(info){
        return  axios({
            method:"post",
            url:"/api/order/add",
            data:qs.stringify(info)
        })
    },
    list(info){
        return  axios({
            method:"get",
            url:"/api/order/list",
            params:info
        })
    }
}
export default  orderInfo;