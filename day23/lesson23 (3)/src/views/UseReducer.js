import  react,{useReducer} from "react";

const initialState = {count: 0,userage:18,username:'leson'};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {...state,count: state.count + 1};
    case 'decrement':
      return {...state,count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

export  default  Counter;