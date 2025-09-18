import React, { useState } from 'react'
import Loging from './pages/Loging'
import MyContext from './context/MyContext'
const App = () => {

  const [name,setName]=useState("Sohom")

  return (
   <MyContext.Provider value={{name,setName}}>
    <h1>App:{name}</h1>
   <Loging />
   </MyContext.Provider>
  )
}

export default App