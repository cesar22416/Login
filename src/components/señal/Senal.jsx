/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { AiOutlineWifi } from 'react-icons/ai';

const SignalStrengthMonitor = ({ signalStrength }) => {
  return (
    <div>
      <AiOutlineWifi size={20} color={getColor(signalStrength)} />
    </div>
  );
};

const getColor = (signalStrength) => {
  if (signalStrength > 80) {
    return 'green'; // buena señal
  } else if (signalStrength > 50) {
    return 'orange'; // señal moderada
  } else {
    return 'red'; // señal débil
  }
};

export default SignalStrengthMonitor;
