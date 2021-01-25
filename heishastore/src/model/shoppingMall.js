import { get } from './axios';

export default {
    bannerImg: () => {
        return get("index/ads", { position: "mo_idx_banner" })
    },
    goodsList: () => {
        return get("index/propos", { position: "mo_idx_pos" })
    }
};