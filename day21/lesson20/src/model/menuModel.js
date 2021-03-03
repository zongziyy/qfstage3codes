import  axios  from  "./axios"
export default {
    add:(data)=>{
        return  axios({
            method:"post",
            url:"/api/menuinfo",
            data
        })
    },
    query:(params)=>{
        return  axios({
            method:"get",
            url:"/api/menuinfo",
            params
        })
    }
}