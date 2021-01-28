import { get, post, patch, dele } from './axios';

export default {
    query: (params) => {
        return get("http://localhost:3333/shoppingcar", params)
    },
    add: (data) => {
        return post("http://localhost:3333/shoppingcar", data)
    },
    addNum: (id, data) => {
        return patch("http://localhost:3333/shoppingcar" + "/" + id, data)
    },
    changeList: ({ id, data }) => {
        return patch("http://localhost:3333/shoppingcar" + "/" + id, data)
    },
    del: (id) => {
        return dele("http://localhost:3333/shoppingcar" + "/" + id)
    }
}