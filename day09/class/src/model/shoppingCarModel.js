//数据请求的封装
import  {post,get,patch} from "./index";
//数据库表名的定义
import  tableInfo  from  "./tableConfig";

export  default  {
    add:(data)=>{
      return  post(tableInfo.shoppingcar,data)
    },
    query:(params)=>{
        return get(tableInfo.shoppingcar,params)
    },
    update:(id,data)=>{
        return patch(tableInfo.shoppingcar+"/"+id,data);
    }
}