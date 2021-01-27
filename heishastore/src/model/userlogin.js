import { get, post } from './axios';

export default {
    query: (params) => {
        return get("http://localhost:3333/userinfo", params)
    },
    add: (data) => {
        return post("http://localhost:3333/userinfo", data)
    }
};