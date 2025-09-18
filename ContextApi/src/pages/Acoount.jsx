import React from 'react'
import { useContext } from 'react'
import MyContext from '../context/MyContext'
const Acoount = () => {
    const data = useContext(MyContext)
    const DataChange=()=>{
        data.setName("Shuvomoy")
    }
  return (
    <>Acoount:{data.name}
    <button onClick={DataChange}>Click to Chage</button>
    </>
  )
}

export default Acoount