import  axios from "./axios";
export default  {
    query:(params)=>{
        return axios({
            method:"get",
            url:"/api/usermenu",
            params
        })
    },
    add:(data)=>{
        return axios({
            method:"post",
            url:"/api/usermenu",
            data
        })
    },
    del:(id)=>{
        return axios({
            method:"delete",
            url:"/api/usermenu/"+id
        })
    }
}