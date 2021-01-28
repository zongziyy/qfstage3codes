import axios from "./axios"

let post = (url, data) => {
    return axios({
        method: "post",
        url,
        data
    })
}
let get = (url, params) => {
    return axios({
        method: "get",
        url,
        params
    })
}

let patch = (url, data) => {
    return axios({
        method: "patch",
        url,
        data
    })
}
let  del=(url,data)=>{
    return  axios({
        method:"del",
        url,
        data
    })}
export {
    post, get, patch, del
}