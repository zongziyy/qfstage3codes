import axios from './axios';

let $axios = {
    bannerList: () => {
        return axios({
            method: 'get',
            url: 'banner'
        })
    }
}

export default $axios;