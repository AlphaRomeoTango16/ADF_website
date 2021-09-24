import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import GlobalStyle from './utils/style/GlobalStyle'
import { ThemeProvider } from './utils/context'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

