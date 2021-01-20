import axios from './axios';

let $axios = {
    moviesList: (params) => {
        return axios({
            method: 'get',
            url: "https://m.maizuo.com/gateway",
            params,
            headers: {
                "X-Host": "mall.film-ticket.film.list"
            }
        })
    },
    comingMovies: (params) => {
        return axios({
            method: 'get',
            url: "https://m.maizuo.com/gateway",
            params,
            headers: {
                "X-Host": "mall.film-ticket.film.list"
            }
        })
    }
}

export default $axios;