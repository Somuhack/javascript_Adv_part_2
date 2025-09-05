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

const App = () => {
  return (
    <>
    <Home/>
    </>
  )
}

export default App