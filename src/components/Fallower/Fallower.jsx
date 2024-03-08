/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Fallower = ({ text, icono }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>{text}: {count}</div>
      <button className='btn btn-outline-danger' onClick={handleClick}>{icono}</button>
    </div>
  );
};

export default Fallower;
