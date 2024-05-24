import React, { useState } from 'react';
import ThemeContext from './components/ThemeContext';
import Bt3 from './components/Bt3';
import Bt4 from './components/Bt4'
import Bt5 from './components/Bt5'
import Bt6 from './components/Bt6'
import Bt7 from './components/Bt7'
import Bt1 from './component2/Bt1'
import Bt2 from './component2/Bt2'
import Btap3 from './component2/Btap3'
import Btap4 from './component2/Btap4'
import Btap5 from './component2/Btap5'
import Btap6 from './component2/Btap6'
function App() {
  const [themeBlue, setThemeBlue] = useState({ color: 'blue' });
  const [themeRed, setThemeRed] = useState({ color: 'red' });

  const toggleThemeBlue = () => {
    setThemeBlue({ color: themeBlue.color === 'blue' ? 'red' : 'blue' });
  };

  const toggleThemeRed = () => {
    setThemeRed({ color: themeRed.color === 'red' ? 'blue' : 'red' });
  };

  return (
    <div>
      <ThemeContext.Provider value={{ theme: themeBlue, toggleTheme: toggleThemeBlue }}>
        Bài 3
        <Bt3 />
      </ThemeContext.Provider>
      <ThemeContext.Provider value={{ theme: themeRed, toggleTheme: toggleThemeRed }}>
        <Bt3 /><br/><br/>
        Bài 4
        <Bt4></Bt4><br/>
        Bài 5
        <Bt5></Bt5>
        Bài 6
        <Bt6></Bt6>
        Bài 7
        <Bt7></Bt7>
      </ThemeContext.Provider>

      Bài 1
      <Bt1></Bt1>
      Bài 2
      <Bt2></Bt2>
      Bài 3
      <Btap3></Btap3>
      Bài 4
      <Btap4></Btap4>
      Bài 5
      <Btap5></Btap5>
      Bài 6
      <Btap6></Btap6>
    </div>
  );
}

export default App;
