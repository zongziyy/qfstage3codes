import { get } from './axios';

export default {
    lbImg: (id) => {
        return get("pro/lbimg", { skusn: id });
    },
    goodsDetail: (id) => {
        return get("/pro/baseinfo", { skusn: id })
    },
    goodsOnSale: (id) => {
        return get("pro/act", { skusn: id })
    },
    goodsDecripes: (params) => {
        return get("pro/detailinfo", params)
    },
    commentList: (params) => {
        return get("pro/commentList", params)
    }
}