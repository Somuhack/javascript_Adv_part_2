// import React, { useState } from 'react'
// import C1 from './components/C1'
// const App = () => {
//   const [data,setData]=useState({
//      name:"",
//      age:0,
//      isMarried:false
//   })
//   const handleAddData=()=>{
//        setData({
//         name:"Shubhomoy",
//         age:28,
//         isMarried:true
//        })
//   }
//   return (
//    <>
//       {data.name && <p>name :{data.name}</p>}
//       {/* name : {data?.name} */}
//       {data && data.name}
//       Is Married : {data?.isMarried?"Married":"Single"}
//       <button onClick={handleAddData}>Click to Data Change</button>
//    </>
//   )
// }

// export default App
import Home from './pages/Home'
import React from 'react'
import Nshm from "./assets/images.png"
import MyhooksReducer from './hooks/MyhooksReducer'

const App = () => {
  return (
    <>
    {/* <Home/> */}
    {/* <img src={"./../public/images.png"} alt='hello' width={200}/>
    <img src={Nshm} alt='hello' width={200}/> */}
    <MyhooksReducer/>
    </>
  )
}

export default App