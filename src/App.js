import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';
import './App.css';
import Form from './components/Form';

export const ThemeContext = createContext(null);

function App() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((currentTheme) =>
            currentTheme === 'light' ? 'dark' : 'light'
        );
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="App" id={theme}>
                <Form />
                <div className="switch">
                  {/* <label>{theme === 'light' ? '☀️' : '🌙' }</label> */}
                    <ReactSwitch
                        onChange={toggleTheme}
                        checked={theme === 'dark'}
                        checkedIcon={'☀️'}
                        uncheckedIcon={'🌙'}
                    />
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
