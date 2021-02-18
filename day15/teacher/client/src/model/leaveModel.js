import  {post,get,patch} from  "./index"

export default {
    add:(info)=>{
        return post("/api/leave/add",info);
    },
    query:(info)=>{
        return get("/api/leave/student",info);
    },
    queryAll:(info)=>{
        return get("/api/leave/teacher",info);
    },
    update:(info)=>{
        return patch("/api/leave/update",info);
    },
    group:()=>{
        return  get("/api/leave/group");
    }

}