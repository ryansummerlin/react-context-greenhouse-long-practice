import React from 'react';
import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';

function LightSwitch() {
  const { themeName, setThemeName } = useTheme();
  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on" onClick={e => setThemeName('day')}>DAY</div>
      <div className="off" onClick={e => setThemeName('night')}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;
