import React from 'react';
import { useState, useEffect } from 'react';
import './ClimateStats.css';
import { useClimate } from '../../context/ClimateContext';

function ClimateStats() {
  const { temp, humidity } = useClimate();
  const [actualTemp, setActualTemp] = useState(50);
  const [actualHum, setActualHum] = useState(40);

  useEffect(() => {
    const changeTemp = function() {
        if (actualTemp < temp) {
          setActualTemp(actualTemp + 1);
        } else if (actualTemp > temp) {
          setActualTemp(actualTemp - 1);
        }
    }

    const myTimeout = () => {
      setTimeout(changeTemp, 1000);
    }

    while (actualTemp !== temp) {
      myTimeout();
      return () => {
        clearTimeout(myTimeout);
      }
    }

  }, [actualTemp]);

  useEffect(() => {
    const changeHum = function() {
        if (actualHum < humidity) {
          setActualHum(Math.round(actualHum * 1.02));
        } else if (actualHum > humidity) {
          setActualHum(Math.round(actualHum * .98));
        }
    }

    const myTimeout = () => {
      setTimeout(changeHum, 1000);
    }

    while (actualHum !== humidity) {
      myTimeout();
      return () => {
        clearTimeout(myTimeout);
      }
    }

  }, [actualHum]);

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {actualTemp}°F
      </div>
      <div className="humidity">
        Humidity {actualHum}%
      </div>
    </div>
  )
}

export default ClimateStats;
