import React, {useState} from 'react'
import Navbar from './components/Navbar'
import GlobalStyle from './globalStyle';
import Hero from './components/Hero'
import BottomBar from './components/BottomBar';
import Dropdown from './components/Dropdown';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './pages/About'
import Teams from './pages/Teams'
import Projects from './pages/Projects'
import Explore from './pages/Explore'


const App = () => {
  const [isOpen, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/teams" component={Teams} />
          <Route path="/projects" component={Projects} />
          <Route path="/explore" component={Explore} />
        </Switch>
      </Router>
      
      
      {/* <Hero /> */}
      <BottomBar />
    </>
  );
}

export default App;
