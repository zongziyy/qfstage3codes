
import React,{useRef,useState,useEffect,forwardRef,useImperativeHandle} from 'react'

 function Child4(props,ref) {
    let userageInput = useRef();
    useImperativeHandle(
        ref,
        ()=>({
            name:"userageInput",
            fn:()=>{
                return  userageInput.current.value;
            }
        })

    )
  

    return (
        <div>
            <input ref={userageInput} onChange={
                (e)=>{
                    props.setuserage(e.target.value)

                }
            }/>
        </div>
    )
}
export default forwardRef(Child4);
