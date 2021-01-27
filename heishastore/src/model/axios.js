import axios from "axios";

axios.defaults.baseURL = "http://store.blackshark.com/";

export default axios;

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

let dele = (url, data) => {
    return axios({
        method: "detele",
        url,
        data
    })

}
export { post, get, patch ,dele}