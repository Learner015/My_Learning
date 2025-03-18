import React, { createContext, useState, useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

// Create a Context for the theme
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

// ThemeContextProvider component to wrap around the application
export const DarkMode = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');

  // Function to toggle the theme
  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Create a theme based on the current themeMode
  const theme = createTheme({ 
    palette:
     {
         mode: themeMode,
        background: 
        {
             default: themeMode === 'light' ? '#f0f0f0' : '#141414'
             },
    text: 
    {
         primary: themeMode === 'light' ? '#000' : '#123'},
    },
    tab: 
         { 
            light: '#141414',
             // Custom color for tabs in light mode
            dark: '#141414',
             // Custom color for tabs in dark mode
              },
             
            })

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
