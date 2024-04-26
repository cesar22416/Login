/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './Bateria.css'; // Asegúrate de tener un archivo CSS para estilos

function BatteryMonitor() {
  const [batteryLevel, setBatteryLevel] = useState(null);

  useEffect(() => {
    const updateBatteryLevel = async () => {
      if ('getBattery' in navigator) {  
        try {
          const battery = await navigator.getBattery();
          setBatteryLevel(battery.level * 100);
          battery.addEventListener('levelchange', () => {
            setBatteryLevel(battery.level * 100);
          });
        } catch (error) {
          console.error('Error fetching battery information:', error);
        }
      } else {
        console.error('Battery API is not supported in this browser');
      }
    };

    updateBatteryLevel();

    return () => {}; // Cleanup function
  }, []);

  return (
  <div>
    {batteryLevel !== null ? (
      <div className='Loubateria'>
        <div className="battery-icon">
          <div className="battery-level" style={{ height: `${batteryLevel}%` }}></div>
        </div>
        <p>{batteryLevel}%</p>
      </div>
    ) : (
      <p>Obteniendo información de la batería...</p>
    )}
  </div>
  );
}

export default BatteryMonitor;
