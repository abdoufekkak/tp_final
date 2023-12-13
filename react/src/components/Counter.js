import React, { useState } from 'react';

const Counter = () => {
  
  const [count, setCount] = useState(0);

  
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      
      <p>Count: {count}</p>

      
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
