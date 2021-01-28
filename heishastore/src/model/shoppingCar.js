import { get, post, patch, dele } from './axios';
import axios from "axios";

export default {
    query: (params) => {
        return get("http://49.235.108.109:3333/shoppingcar", params)
    },
    add: (data) => {
        return post("http://49.235.108.109:3333/shoppingcar", data)
    },
    addNum: (id, data) => {
        return patch("http://49.235.108.109:3333/shoppingcar" + "/" + id, data)
    },
    changeList: ({ id, data }) => {
        return patch("http://49.235.108.109:3333/shoppingcar" + "/" + id, data)
    },
    del: (id) => {
        return dele("http://49.235.108.109:3333/shoppingcar" + "/" + id)
    },
    remove: async function(arr) {
        for (let i = 0; i < arr.length; i++) {
            await axios({
                method: "delete",
                url: "http://49.235.108.109:3333/shoppingcar/" + arr[i]
            })
        }

    }
}