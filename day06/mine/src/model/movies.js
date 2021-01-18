import axios from './axios';

let $axios = {
    movieList: () => {
        return axios({
            method: 'get',
            url: "https://m.maizuo.com/gateway?cityId=420100&pageNum=1&pageSize=10&type=1&k=3221745",
            headers: {
                "X-Host": "mall.film-ticket.film.list"
            }
        })
    },
    comingMovies: () => {
        return axios({
            method: 'get',
            url: "https://m.maizuo.com/gateway?cityId=420100&pageNum=1&pageSize=10&type=2&k=7153085",
            headers: {
                "X-Host": "mall.film-ticket.film.list"
            }
        })
    }
}

export default $axios;