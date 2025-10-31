"use client";

import { useCounter } from "@/lib/store/counter";

const Counter = () => {
  const { value, increment, value2, increment2 } = useCounter();

  const handleClick = () => {
    increment(10000000);
  };

  const handleClick2 = () => {
    increment2();
  };

  return (
    <>
      <p>Counter value: {value}</p>
      <button onClick={handleClick}>Click</button>
      <hr />
      <p>Counter value2: {value2}</p>
      <button onClick={handleClick2}>Click</button>
    </>
  );
};

export default Counter;
