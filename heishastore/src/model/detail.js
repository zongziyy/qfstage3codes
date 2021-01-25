import { get } from './axios';

export default {
    lbImg: (id) => {
        return get("pro/lbimg", { skusn: id });
    }
}