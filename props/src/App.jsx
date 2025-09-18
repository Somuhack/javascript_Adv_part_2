// // import React, { useState } from 'react'
// // import C1 from './components/C1'
// // const App = () => {
// //   const [data,setData]=useState({
// //      name:"",
// //      age:0,
// //      isMarried:false
// //   })
// //   const handleAddData=()=>{
// //        setData({
// //         name:"Shubhomoy",
// //         age:28,
// //         isMarried:true
// //        })
// //   }
// //   return (
// //    <>
// //       {data.name && <p>name :{data.name}</p>}
// //       {/* name : {data?.name} */}
// //       {data && data.name}
// //       Is Married : {data?.isMarried?"Married":"Single"}
// //       <button onClick={handleAddData}>Click to Data Change</button>
// //    </>
// //   )
// // }

// // export default App
// import Home from './pages/Home'
// import React, { useEffect, useState } from 'react'
// import Nshm from "./assets/images.png"
// import MyhooksReducer from './hooks/MyhooksReducer'
// import MyuseRef from './hooks/MyuseRef'
// import MyuseMemo from './hooks/MyuseMemo'
// import MyuseCallback from './hooks/MyuseCallback'
// import MyuseEffect from './hooks/myuseEffect'
// import Mycontext from "./context/ContextStore.js"
// import axios from 'axios'
// const App = () => {
//     const [name,setName]=useState([])
//   const DataCall = async()=>{
//     const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
//      console.log(res);
     
//   }
//   useEffect(()=>{
//     DataCall()
//   },[])

//   return (
//     <>
//     <Mycontext.Provider >
//     <Home/>
//     </Mycontext.Provider>
//     {/* <img src={"./../public/images.png"} alt='hello' width={200}/>
//     <img src={Nshm} alt='hello' width={200}/> */}
//     {/* <MyhooksReducer/> */}
//     {/* <MyuseMemo/> */}
//     {/* <MyuseRef/> */}
//     {/* <MyuseCallback/> */}
//     {/* <MyuseEffect/> */}
//     </>
//   )
// }

// export default App
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Post from './pages/Post'
import ApiContext from './context/ApiContext'
import Home from './pages/Home'


const App = () => {
  const [data,setData]=useState([])
  const DataCall = async ()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log(res);
    setData(res.data)
  }
  useEffect(()=>{
    DataCall()
  },[])
  return (
    <ApiContext.Provider value={data}>
      <Home/>
      <Post/>
    </ApiContext.Provider>
  )
}

export default App