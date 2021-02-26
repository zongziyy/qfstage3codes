import  axios from  "./axios.js";
import  qs  from  "qs";

var  partaInfo = {
    add(info){
        return  axios({
            method:"post",
            url:"/api/parta/add",
            data:qs.stringify(info)
        })
    },
    list(){
        return  axios({
            method:"get",
            url:"/api/parta/list"
        })
    }
}

export default  partaInfo;