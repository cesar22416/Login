/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Fallower = ({ text, cantidad }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>{text}: {cantidad}</div>
      
    </div>
  );
};

export default Fallower;
