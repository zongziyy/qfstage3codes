import  axios  from  "./axios";

export  default  {
    getInfoById:(params)=>{
        return  axios({
            method:"get",
            url:"https://m.maizuo.com/gateway",
            params,
            headers:{
                "X-Host": "mall.film-ticket.film.info"
            }
        })
    }
}