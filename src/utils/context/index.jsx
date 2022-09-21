import { useState, createContext } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const[theme, setTheme] = useState('dark')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    // const toggleTheme = () => {
    //     if(localStorage.getItem('theme') !== ''){
    //         setTheme(theme === 'light' ? 'dark' : 'light')
    //     } else {
    //         const SaveTheme = localStorage.getItem('theme');
    //         setTheme(theme === SaveTheme)
    //     }
    //     const dataTheme = setTheme(theme)
    //     if (dataTheme === 'dark') {
    //         setTheme(theme === 'light')
    //         localStorage.setItem('theme', 'light')
    //     } else {
    //         setTheme(theme === 'dark')
    //         localStorage.setItem('theme', 'dark')
    //     }
    // }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
