import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(1000);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const increment2 = () => {
    setCount((previousCount) => previousCount + 1);
  };
  const decrement2 = () => {
    setCount((previousCount) => previousCount - 1);
  };
  const reset = () => {
    setCount(1000);
  };
  const mul = () => {
    setCount((previousCount) => previousCount * 2);
  };
  const divideThree = () => {
    setCount((previousCount) =>
      previousCount % 3 === 0 ? previousCount / 3 : previousCount
    );
  };
  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={mul}>x2</button>
        <button onClick={divideThree}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  );
};

export default App;
