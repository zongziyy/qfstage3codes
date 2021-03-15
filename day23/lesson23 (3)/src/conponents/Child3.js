import React from 'react'

export default function Child3(props) {
    return (
        <div>
            <button onClick={()=>{
                props.getTotal();
            }}>计算总价吧</button>
        </div>
    )
}
