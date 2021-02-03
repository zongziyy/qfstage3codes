import  {post,get} from  "./index"

export default {
    add:(info)=>{
        return post("/api/leave/add",info) 
    },
    query:(info)=>{
        return get("/api/leave/student",info)
    }

}