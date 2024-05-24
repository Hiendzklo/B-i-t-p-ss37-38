import {useContext} from 'react';
import ThemeContext from './ThemeContext';

function Button() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      style={{ backgroundColor: theme.color, color: 'white', padding: '10px 20px' }}
      onClick={toggleTheme}
    >
      Click me
    </button>
  );
}

export default Button;
