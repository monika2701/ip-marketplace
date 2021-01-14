import React, { Component } from 'react';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Home from './components/HomepageComponents/HomeComponent';
import Students from './components/StudentsComponent';
import Researchers from './components/ResearcherspageComponents/ResearchComponent';
import Startups from './components/StartupspageComponents/StartupComponent';
import Corporates from './components/CorporatespageComponents/CorporatesComponent';
import Contact from './components/ContactComponents/ContactpageComponents';
import Faq from './components/FaqpageComponents/FaqComponents';
import Iconbar from './components/IconbarComponent';
import SignIn from './components/SignInComponent';
import SignUp from './components/SignUpComponent';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css'; 

class App extends Component {
 
  render() {
    return (
      <BrowserRouter> 
      <div className="App">
        
        <Header />
        <Iconbar />
       
        <Switch>
              <Route path='/home' component={Home} /> 
              <Route path='/students' component={Students} />
              <Route path='/researchers' component={Researchers} />
              <Route path='/startups' component={Startups} />
              <Route path='/corporates' component={Corporates} />
              <Route path='/contacts' component={Contact} />
              <Route path='/faq' component={Faq} />
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
              <Redirect to="/home" />
          </Switch>

        
        <Footer />
      </div>
    </BrowserRouter>
    
    );
  }
}

export default App;
