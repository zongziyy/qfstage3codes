import axios from "axios";

// axios.defaults.baseURL = "http://store.blackshark.com/";

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
        method: "delete",
        url,
        data
    })

}

// async function remove(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         await axios({
//             method: "delete",
//             url: "http://49.235.108.109:3333/shoppingcar/" + arr[i]
//         })
//     }

// }
export { post, get, patch, dele }