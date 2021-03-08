import axios from './axios'

export default {
    query: (params) => {
        return axios({
            method: 'get',
            url: '/api/menutable',
            params
        })
    },
    add: (data) => {
        return axios({
            method: 'post',
            url: '/api/menutable',
            data
        })
    }
}