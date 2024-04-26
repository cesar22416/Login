/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontSize: '10px', marginTop: '0px' }}>
      {time.toLocaleTimeString()}
    </div>
  );
}

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '0px' }}>
      <DigitalClock />
    </div>
  );
}

export default App;
