
//数据请求的封装
import { post, get, patch ,del} from "./index";
//数据库表名的定义
import tableInfo from "./tableConfig";
export default {
  
    add: (data) => {
        return post(tableInfo.shoppingcarlist, data)
    },
    query: (params) => {
        return get(tableInfo.shoppingcarlist, params)
    },
    update: (id, data) => {
        return patch(tableInfo.shoppingcarlist + "/" + id, data);
    },
    delete: (id) => {
        return del(tableInfo.shoppingcarlist , id);
    }


}