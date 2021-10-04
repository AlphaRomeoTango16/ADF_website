import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
// import Loader from './components/Loader'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './pages/Error'
import GlobalStyle from './utils/style/GlobalStyle'
import { LanguageProvider, ThemeProvider } from './utils/context'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronCircleDown, faChevronDown)

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <ThemeProvider>
        <LanguageProvider />
          {/* <Loader /> */}
          <GlobalStyle />
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
          <Footer />
        </ThemeProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

