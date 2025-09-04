import React from 'react'
import styles from "./Button.module.css"
const Button = (p) => {
  return (
    <button className={styles.btn} onClick={p.onclick} style={p.color?{backgroundColor:p.color}:{backgroundColor:"white",border:"1px solid blue",color:"blue"}}>{p.text}</button>
  )
}

export default Button