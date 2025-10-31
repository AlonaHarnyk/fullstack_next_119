"use client";

import { useCounter } from "@/lib/store/counter";

const CounterTest = () => {
  const { value, value2 } = useCounter();

  return (
    <>
      <p>Counter value: {value}</p>
      <p>Counter value2: {value2}</p>
    </>
  );
};

export default CounterTest;
