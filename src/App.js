import React,{useReducer} from 'react';
let initialState={a:0,b:0};
let reducer=(count,actions)=>{
  switch(actions.type){
    case 'increamentA':
      return {...count,a:count.a+actions.value};
    case 'increamentB':
      return {...count,b:count.b+actions.value};
    case 'decreamentA':
      return {...count,a:count.a-actions.value};
    case 'decreamentB':
      return {...count,b:count.b-actions.value};
    case 'reset':
      return initialState;
  }
}
const App=()=>{
  const[count1,dispatch1]=useReducer(reducer,initialState)
  const[count2,dispatch2]=useReducer(reducer,initialState)
  return(
    <div>
       <h1>A1={count1.a}  |   B1={count1.b}</h1>
       <h1>A2={count2.a}  |   B2={count2.b}</h1>
       <button onClick={()=>{dispatch1({type:"increamentA",value:1})}}>IncreaseA1</button>
       <button onClick={()=>{dispatch1({type:"increamentB",value:1})}}>IncreaseB1</button>
       <button onClick={()=>{dispatch1({type:"decreamentA",value:1})}}>DecreaseA1</button>
       <button onClick={()=>{dispatch1({type:"decreamentB",value:1})}}>DecreaseB1</button>
       <br></br>
       <button onClick={()=>{dispatch2({type:"increamentA",value:1})}}>IncreaseA2</button>
       <button onClick={()=>{dispatch2({type:"increamentB",value:1})}}>IncreaseB2</button>
       <button onClick={()=>{dispatch2({type:"decreamentA",value:1})}}>DecreaseA2</button>
       <button onClick={()=>{dispatch2({type:"decreamentB",value:1})}}>DecreaseB2</button>
       <button onClick={()=>{
        dispatch1({type:"reset"})
        dispatch2({type:"reset"})
       }}>Reset</button>
      
    </div>
  )

}
export default App;