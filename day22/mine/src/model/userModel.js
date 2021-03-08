import axios from './axios'



export default {
    login: (params) => {
        return axios({
            method: 'get',
            url: '/api/usertable',
            params
        })
    },
    query: (params) => {
        return axios({
            method: 'get',
            url: '/api/usertable',
            params
        })
    },
    add: (data) => {
        return axios({
            method: 'post',
            url: '/api/usertable',
            data
        })
    }
}