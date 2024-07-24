import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newTheme);
        
    };

    useEffect(() => {
      document.documentElement.classList.add(theme);
  }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={theme}>{children}</div>
        </ThemeContext.Provider>
    );
};
