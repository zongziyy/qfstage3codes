import React,{useState,useEffect,useCallback,useMemo} from 'react'
import  Child3  from  "../conponents/Child3";
import  userModel from  "../model/userModel";

function add(num1, num2, fn) {

    fn(num1 + num2);
}

add(2, 4, (result) => {
    console.log(result);
});


export default () => {
    const [goodsnum, setgoodsnum] = useState(0);
    const [goodsprice, setgoodsprice] = useState(0);
    const [total, settotal] = useState(0);
    const [key, setkey] = useState('')
    const [list, setlist] = useState([])

    // useEffect(() => {
    //     settotal(goodsprice*goodsnum);

    // }, [goodsnum,goodsprice])


  let getTotal=  useCallback(
        () => {
           settotal(goodsnum*goodsprice);
        }
    )
   let total2 =useMemo(() => {
        return  goodsprice*goodsnum;
    }, [goodsnum,goodsprice])

   useEffect(async() => {
       let {data:result} = await userModel.query({username:key})
       setlist(result);
   }, [key])

   

    return (
        <div>
            搜索<input value={key} onChange={(e)=>{
                setkey(e.target.value);
            }}/>
            {list.map(item=>{
                return <div key={item.id}><div>{item.username}</div><div >{item.userpwd}</div></div>
            })}
           商品数量<input value={goodsnum} onChange={(e)=>{
               setgoodsnum(e.target.value);
            
           }}/>
           商品价格<input value={goodsprice} onChange={(e)=>{
               setgoodsprice(e.target.value)
           }}/>
           <button onClick={()=>{
               getTotal();
           }}>计算</button>
           <Child3 getTotal={getTotal}></Child3>
           商品总价{total}
           computed计算的结果{total2}
        </div>
    )
}
