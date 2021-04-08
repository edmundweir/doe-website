import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Mission from './components/pages/Mission';
import Kickstarter from './components/pages/Kickstarter';
import Roadmap from './components/pages/Roadmap';
import PressKit from './components/pages/PressKit';
import WelcomeToCountry from './components/pages/WelcomeToCountry';
import Contact from './components/pages/Contact';
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
            <Route path='/roadmap' component={Roadmap} />
            <Route path='/press-kit' component={PressKit} />
            <Route path='/welcome-to-country' component={WelcomeToCountry} />
            <Route path='/contact' component={Contact} />
          </Switch>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
