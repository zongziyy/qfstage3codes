import axios from "./axios"

export default  {
    add:(data)=>{
        return  axios({
            method:"post",
            url:"/api/usermenu",
            data
        })
    },
    query:(params)=>{
        return axios({
            method:"get",
            url:"/api/usermenu",
            params
        })
    },
    del:(id)=>{
        return  axios({
            method:"delete",
            url:"/api/usermenu/"+id
        })
    }
}