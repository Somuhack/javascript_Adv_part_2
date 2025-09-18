import React from "react";

const listing = () => {
  const data = [
    { id: 1, name: "somnath", relationship: "Maired" },
    { id: 2, name: "shuvomoy" },
    { id: 1, name: "shoam" },
  ];
  return <div>
     <ul>
        {data.map((todo)=>
            <>
            <li>{todo.id}</li>
            <li>{todo.name}</li>
             {todo.relationship && <li>{todo.relationship}</li>}
            </>  
        )}
     </ul>

  </div>;
};

export default listing;
