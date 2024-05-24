import React, { useState, useCallback } from 'react';

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState<string>('#000000');  // Default color is black

  const handleChangeColor = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  }, []);

  return (
    <div>
      <label htmlFor="color-picker">Màu người dùng chọn:</label>
      <input 
        type="color" 
        id="color-picker" 
        value={color} 
        onChange={handleChangeColor} 
        style={{ marginLeft: '10px' }}
      />
      <div>
        <p>Màu hiển thị:</p>
        <div 
          style={{
            width: '100px',
            height: '50px',
            backgroundColor: color,
            border: '1px solid #000'
          }}
        />
      </div>
    </div>
  );
}

export default ColorPicker;
