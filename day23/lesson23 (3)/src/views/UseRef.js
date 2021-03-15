import React, { useRef, useState, useCallback } from 'react'
import Child4 from "../conponents/Child4";


export default function UseRef() {
    let usernameInput = useRef();
    const [userage, setuserage] = useState("");

    let  child4 =useRef();

   


    return (
        <div>
            <input ref={usernameInput} /><button onClick={() => {
                alert(usernameInput.current.value);
            }}>获取值</button>
            <button onClick={() => {
                //alert(userage);
                        console.log(child4.current.fn());
            }}>获取子元素的内容</button>
            <Child4 setuserage={setuserage} ref={child4} ></Child4>
        </div>
    )
}



// import React, { Component } from 'react'
// export default class UseRef extends Component {
//     render() {
//         return (
//             <div>
//                 <input ref="username"/><button onClick={()=>{
//                     alert(this.refs.username.value);
//                 }}>获取值</button>
//             </div>
//         )
//     }
// }
