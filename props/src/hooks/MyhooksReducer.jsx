import React from "react";
import { useReducer } from "react";
function Myreducer(state, action) {
  switch (action.type) {
    case "inc":
      return (state += 1);
    case "dec":
        return state-=1
    case "incby10":
        return state+=action.payload
    default:
      return state;
  }
}

const MyhooksReducer = () => {
  const [data, dispatch] = useReducer(Myreducer, 10);
  return (
    <>
      <div>MyhooksReducer:{data}</div>
      <button onClick={() => dispatch({ type: "inc" })}>inc</button>
      <button onClick={() => dispatch({ type: "dec" })}>Dec</button>
      <button onClick={() => dispatch({ type: "incby10",payload:10 })}>Inc By 10</button>
    </>
  );
};

export default MyhooksReducer;
