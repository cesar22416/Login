import React from 'react';
import Time from '../relog/Time';
import Bateria from '../bateria/Bateria';
import SignalStrengthMonitor from '../señal/Senal';
import './StartusBar.css';

export const StatusBar = () => {
  const signalStrength = 70;
  return (
    <div className='caja'>
    <div className='Statusbar'>
        <Time/>
    </div>
    <div className='bateria'>
        <Bateria />
        <SignalStrengthMonitor signalStrength={signalStrength} />
    </div>
    </div>
  );
};

export default StatusBar;
