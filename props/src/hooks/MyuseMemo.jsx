import React, { useState ,useMemo} from "react";

const MyuseCallback = () => {
  const [main, setMain] = useState(0);
  const [side, setSide] = useState(0);
  const myheavywork = useMemo(()=>hevywatitedfun(main),[main]);
  const inc = () => setMain(main + 1);
  const incSide = () => setSide(side + 1);
  return (
    <>
      <h1>my heavy work : {myheavywork}</h1>
      <h1>Side :{side}</h1>
      <button onClick={inc}>Click to inc</button>
      <button onClick={incSide}>Click to incSide</button>
    </>
  );
};
const hevywatitedfun = (a) => {
  console.log("calculatin.......");
  for (let i = 0; i < 1000000000; i++) {
    a += 1;
  }
  return a;
};

export default MyuseCallback;
