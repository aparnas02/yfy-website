import React, { useState } from 'react';
import classNames from 'classnames';

export default function NioCounter({ className }) {

  const [count, setCount] = useState(0);
  const compClasses = classNames({
    "nl-counter": true,
    [`${className}`]: className,
  });

  const decrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className={compClasses}>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
