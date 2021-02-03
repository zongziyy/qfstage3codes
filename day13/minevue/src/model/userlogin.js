import { get, post } from './axios';

export default {
    query: (params) => {
        return get("http://49.235.108.109:3333/userinfo", params)
    },
    add: (data) => {
        return post("/api/users/login", data)
    },
};