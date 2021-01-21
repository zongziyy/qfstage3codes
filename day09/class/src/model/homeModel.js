import axios  from  "./axios";

export  default  {
    bannerList:()=>{
        return axios({
            method:"get",
            url:"banner"
        })
    },
    nowPlayingList:(params)=>{
        return axios({
            method:"get",
            url:"https://m.maizuo.com/gateway",
            // cityId=310100&pageNum=3&pageSize=10&type=1&k=7814859
            // params:{
            //     cityId:310100,
            //     pageNum:1,
            //     pageSize:10,
            //     type:1,
            //     k:7814859
            // },
            params,
            headers:{
                "X-Host": "mall.film-ticket.film.list"
            }
        })
    },
    commingList:()=>{
        return axios({
            method:"get",
            url:"https://m.maizuo.com/gateway?cityId=310100&pageNum=2&pageSize=10&type=2&k=2695508",
            headers:{
                "X-Host": "mall.film-ticket.film.list"
            }
        })
    },
}