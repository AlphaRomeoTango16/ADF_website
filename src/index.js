import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
// import LoaderScreen from './components/LoaderScreen'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './pages/Error'
import './i18n'
import GlobalStyle from './utils/style/GlobalStyle'
import { ThemeProvider } from './utils/context'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { HelmetProvider } from 'react-helmet-async'

library.add(fab, faSun, faMoon)

const Loader = () => (
  <div className="App">
    <img className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <ThemeProvider>
          <GlobalStyle />
          <Suspense fallback={<Loader />}>
          <Header />
          <Switch>
            <Route exact path="/">
              {/* <LoaderScreen /> */}
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
          </Suspense>
        </ThemeProvider>
      </Router>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

