import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Mission from './components/pages/Mission';
import Kickstarter from './components/pages/Kickstarter';
import Features from './components/pages/Features';
import PressKit from './components/pages/PressKit';
import WelcomeToCountry from './components/pages/WelcomeToCountry';
import Contact from './components/pages/Contact';
import Volunteers from './components/pages/Volunteers';
import Sponsors from './components/pages/Sponsors';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/mission' component={Mission} />
            <Route path='/kickstarter' component={Kickstarter} />
            <Route path='/features' component={Features} />
            <Route path='/press-kit' component={PressKit} />
            <Route path='/welcome-to-country' component={WelcomeToCountry} />
            <Route path='/contact' component={Contact} />
            <Route path='/volunteers' component={Volunteers} />
            <Route path='/sponsors' component={Sponsors} />
          </Switch>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
