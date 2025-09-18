import React, { useState } from 'react'

const Mytodo = () => {
   const [activity, SetActivity] = useState("")
   const [listData,SetlistData] = useState([])
   function addActivity(listData){
    if(!activity){
      return listData
    }
    console.log();
    
    SetlistData((listData)=>{
        const updatalist = [...listData,activity]
        console.log(updatalist);
        SetActivity('')
        return updatalist
    })
   }
   function RemoveTodo (i){
    const updatelidata = listData.filter((ele,id)=>{
        return i!= id;
    })
    SetlistData(updatelidata)
   }
   function Removeall(){
    SetlistData([])
   }
   const handleChange=()=>{
      SetActivity(e.target.value)}
   }
   function EditTodo(i){
     
   }
   
  return (
    <div className='main'>
        <h2> UseState Todo List </h2>
      <input type='text' placeholder='ADD TODO' value={activity}
       onChange={handleChange}/>
       <button onClick={addActivity}>ADD</button> {listData.length>=1 && <button onClick={Removeall}>Remove all</button>}

       <div>
        <h4>Your List{")"}</h4>
        {listData?.map((data,i)=>{
           return(
            <>
            <p key={i}>
                <div>{data}<button onClick={()=>RemoveTodo(i)}>Delete</button>
                 <button onClick={()=>EditTodo(i)}>Edit</button></div> 
                   
            </p>
            </>
           )
        })}
       </div>
    </div>
  )


export default Mytodo