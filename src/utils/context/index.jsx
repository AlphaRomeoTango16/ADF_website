import { useState, createContext, useContext } from 'react'
import { languageOptions, dictionaryList } from '../../languages/index'

export const LanguageContext = createContext({
    userLanguage: 'fr',
    dictionary: dictionaryList.en
})

export function LanguageProvider({ children }) {
    const defaultLanguage = window.localStorage.getItem('rcml-lang');
    const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'fr');

    const provider = {
        userLanguage,
        dictionary: dictionaryList[userLanguage],
        userLanguageChange: selected => {
            const newLanguage = languageOptions[selected] ? selected : 'fr'
            setUserLanguage(newLanguage);
            window.localStorage.setItem('rcml-lang', newLanguage)
        }
    }

    return (
        <LanguageContext.Provider value={provider}>
            {children}
        </LanguageContext.Provider>
    )
}

export function Text({ tid }) {
    const languageContext = useContext(LanguageContext);
    return languageContext.dictionary[tid] || tid;
}

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const[theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}