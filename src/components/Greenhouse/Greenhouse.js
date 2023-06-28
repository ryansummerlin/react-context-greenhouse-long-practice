import React from 'react';
import { useState, useEffect} from 'react';
import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';
import { useTheme } from '../../context/ThemeContext';

function Greenhouse() {
  const { themeName, setThemeName } = useTheme();
  const [theme, setTheme] = useState(dayImage);

  useEffect(() => {
    if (themeName === 'day') setTheme(dayImage);
    if (themeName === 'night') setTheme(nightImage);
  }, [themeName]);

  return (
    <section>
      <img  className='greenhouse-img'
            src={theme}
            alt='greenhouse'
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
