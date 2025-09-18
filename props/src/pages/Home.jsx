import React from 'react'
import { useContext } from 'react'
import ApiContext from '../context/ApiContext'
// import { useContext } from 'react'
// import ContextStore from '../context/ContextStore'
const Home = () => {
  // const data =useContext(MyContext)
    const data = useContext(ApiContext)
  return (
    <MainLayout>Home</MainLayout>
  )
}

export default Home