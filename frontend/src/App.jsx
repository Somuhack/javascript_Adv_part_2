import React, { useState } from "react"
// import {Header1,Header} from "./components/Header"
import Header from "./components/Header"
import Button from "./components/Button"
function App() {
  // let data =10
  const [data,setData]=useState(10)
  const [liftupdata,setliftupData]=useState("")
  const inc=()=>{
    console.log(data);
    
   setData(data+1)
  }
  const dec=()=>{
    console.log(data);
    
  setData(data-1)
  }
  // const mystyle={backgroundColor:"red",color:"green"}
  // const myFun1=()=>{
  //  console.log(" i Am red");
   
  // }
  // const myFun2=()=>{
  //  console.log(" i Am green");
   
  // }
  // const myFun3=()=>{
  //  console.log(" i Am blue");
   
  // }

      return(
        <>
        {/* <h1 style={mystyle}>Soham</h1>
        <Header1/>
         */}
        {/* <Mainexpo/> */}
        {/* <Header/> */}
        {data}
        {liftupdata}
        <button onClick={inc}>add</button>
        <button onClick={dec}>Dec</button>
        {/* {/* <Button  text="Add Now" /> */}
        <Button text="Login Now" color="blue" onClick={setliftupData}/>
        
        </>
      )
}
export default App