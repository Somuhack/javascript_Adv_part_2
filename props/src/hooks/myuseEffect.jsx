import { useEffect, useState } from "react";

const myuseEffect = () => {
  const [count, setCount] = useState(0);
  const [pwd, setPwd] = useState(0);
  useEffect(() => {
    setCount(count + 1);
  }, [pwd]);
  const pwdinc = () => setPwd(pwd + 1);
  return (
    <>
      count : {count}
      pwd : {pwd}
      <button onClick={() => setCount(count + 1)}>inc</button>
      <button onClick={pwdinc}>pwdinc</button>
    </>
  );
};

export default myuseEffect;
