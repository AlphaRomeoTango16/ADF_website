import { useState, createContext } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const[theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    // const time = new Date().getHours();
    // function AutomaticDarkMode() {
    //     if (time < 19) {
    //         return setTheme(theme === 'dark')
    //     }
    // };
    // AutomaticDarkMode();


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const LanguageProvider = ({ children }) => {
    const[language, setLanguage] = useState('french')
    const toggleLanguage = () => {
        setLanguage(language === 'french' ? 'english' : 'french')
    }

    return (
        <ThemeContext.Provider value={( language, toggleLanguage)}>
            {children}
        </ThemeContext.Provider>
    )
}