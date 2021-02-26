import  axios from  "./axios.js";
import  qs  from  "qs";

var  partbInfo = {
    add(info){
        return  axios({
            method:"post",
            url:"/api/partb/add",
            data:qs.stringify(info)
        })
    },
    list(){
        return  axios({
            method:"get",
            url:"/api/partb/list"
        })
    }
}


export default  partbInfo;