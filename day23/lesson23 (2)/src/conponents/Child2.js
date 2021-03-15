import React,{useContext} from 'react'
import  NumContext from  "../context";

export default function Child2() {
    const store = useContext(NumContext);
    console.log(store.numInfo.value);
    return (
        <div>
            孙组件 {store.numInfo.value}
        </div>
    )
}
