import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
// import LoaderScreen from './components/LoaderScreen'
import LoaderSpinner from './components/LoaderSpinner'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './pages/Error'
import './i18n'
import GlobalStyle from './utils/style/GlobalStyle'
import { ThemeProvider } from './utils/context'
import { dom, library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import { faMalt } from './assets/myicons/index'
import { HelmetProvider } from 'react-helmet-async'

library.add(fab, faSun, faMoon, faChevronUp, faChevronDown, faMalt, faChevronCircleLeft, faChevronCircleRight, faEnvelopeOpenText, faEnvelope, faHome, faFolder, faUser, faSync)

dom.watch();

const Loader = () => (
  <LoaderSpinner />
);

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        {/* <LoaderScreen /> */}
        <ThemeProvider>
          <GlobalStyle />
          <Suspense fallback={<Loader />}>
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
          </Suspense>
        </ThemeProvider>
      </Router>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

