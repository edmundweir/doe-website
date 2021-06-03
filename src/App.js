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
import TheTeam from './components/pages/TheTeam';
import UpdatesNewWebsite from './components/pages/updates/NewWebsite';
import UpdatesGooglePlay from './components/pages/updates/GooglePlay';
import Footer from './components/Footer';
import Textbox from './components/Textbox';

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
            <Route path='/the-team' component={TheTeam} />
            <Route path='/trello' component={() => { 
              window.open('https://trello.com/b/pNT6IwgE/descendants-of-earth', '_blank');
              window.location.assign('https://descendantsofearth.com');
              return null;
            }}/>
            <Route path='/updates-new-website' component={UpdatesNewWebsite} />
            <Route path='/updates-google-play' component={UpdatesGooglePlay} />
          </Switch>
          <Textbox>
                <div class="ml-form-embed"
                data-account="2999389:t0d2h5x4r6"
                data-form="4204165:v5y7r0">
                </div>
            </Textbox>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
