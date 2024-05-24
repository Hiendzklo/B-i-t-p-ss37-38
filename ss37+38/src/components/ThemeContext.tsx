import React, { createContext, useState, useContext } from 'react';

// Định nghĩa kiểu dữ liệu
interface ThemeType {
  color: string;
}

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

// Giá trị mặc định
const defaultContextValue: ThemeContextType = {
  theme: { color: 'blue' },
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

export default ThemeContext;