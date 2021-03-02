import  axios  from  "axios";
export default {
    login:(params)=>{
        return  axios({
            method:"get",
            url:"http://localhost:3456/userinfos",
            params,
        })
    }
}