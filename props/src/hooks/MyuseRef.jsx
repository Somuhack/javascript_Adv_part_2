import React, { useEffect, useState } from "react";
import { useRef } from "react";
const MyuseRef = () => {
  const [data, setData] = useState(10);
  console.log(data);
  const a = useRef(data);
  console.log(a.current);

  return (
    <>
      <div>MyuseRef : {data}</div>
      <button onClick={() => setData(data + 1)}>Inc</button>
    </>
  );
};

export default MyuseRef;
