import React from 'react'
import { useContext } from 'react'
import ApiContext from '../context/ApiContext'
const Post = () => {
  const data = useContext(ApiContext)
  return (
    <div>
        {data.length && data.map((item)=>(
      <ul key={item.id}>
        <li>{item.id}</li>
        <li>{item.title}</li>
        <li>{item.body}</li>
      </ul>
      ))}
    </div>
  )
}

export default Post