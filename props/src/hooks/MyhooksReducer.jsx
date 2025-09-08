import React,{useReducer} from 'react'
function Addtocard(state,action){
  switch(action.type){
    case "inc":
      return state+=1
    case "dec":
      return state==0?0:state-=1
    case "byvalue":
      return state+=action.payload
    default:
      return state
  }
}
const MyhooksReducer = () => {
  const [data,dipatch]=useReducer(Addtocard,0)
  return (
    <>MyhooksReducer:{data}
    <button onClick={()=>dipatch({type:"inc"})}>inc</button>
    <button onClick={()=>dipatch({type:"dec"})}>dec</button>
    <button onClick={()=>dipatch({type:"byvalue",payload:10})}>byvalue</button>
    </>
  )
}

export default MyhooksReducer