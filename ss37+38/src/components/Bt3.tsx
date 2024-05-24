import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function Bt3() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ backgroundColor: theme.color, color: 'white', padding: '10px 20px' }}>
      Click me
    </button>
  );
}

export default Bt3;
