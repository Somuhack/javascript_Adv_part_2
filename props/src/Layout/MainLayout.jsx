import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useContext } from 'react'
import ContextStore from '../context/ContextStore'
const MainLayout = ({children}) => {
  const [themetoggle,setThemeToggle]=useContext(false)
  return (
    <ContextStore.Provider value={{themetoggle,setThemeToggle}}>
      <Header/>
      {children}
      <Footer/>
    </ContextStore.Provider>
  )
}

export default MainLayout