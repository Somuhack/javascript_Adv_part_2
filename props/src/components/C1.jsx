import React from 'react'

const C1 = ({setname}) => {
    const handleSubmit =()=>{
        setname("Sohom")
    }
  return (
   <>
    <div>C1</div>
    <button onClick={handleSubmit}>Click to Change</button>
   </>
  )
}

export default C1