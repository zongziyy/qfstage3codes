import React from 'react'
import Child1 from "../conponents/Child1";
import  NumContext from "../context";

export default  ()=> {
    return (
        <div>
            <NumContext.Provider value={{numInfo:{
                value:999
            }}}>
            <Child1></Child1>    
            </NumContext.Provider>

        </div>
    )
}
