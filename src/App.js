import React, { Component } from 'react';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Home from './components/HomepageComponents/HomeComponent';
import Students from './components/StudentPage/StudentsComponent';
import Researchers from './components/ResearcherspageComponents/ResearchComponent';
import Startups from './components/StartupspageComponents/StartupComponent';
import Corporates from './components/CorporatespageComponents/CorporatesComponent';
import Contact from './components/ContactpageComponents/Contacts';
import Webinar from './components/Webinars/webinarComponent';
import Faq from './components/FaqpageComponents/FaqComponents';
import Login from './components/SignInComponent';
import SignUp from './components/SignUpComponent';
import Overlay from './extras/OverlayComponent';
import ServiceEnquiry from './components/ServiceEnquiryComponent';
import StudentEvaluation from './components/StudentPage/studentEvaluation';
/* import Ribbon from './extras/Ribbon'; */
import { BrowserRouter} from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css'; 

class App extends Component {
 
 
  render() {
    return (
      <BrowserRouter> 
      <div className="App">
        
        <Header />
        <Overlay />
        <Switch>
              <Route path='/home' component={Home} /> 
              <Route path='/students' component={Students} />
              <Route path='/researchers' component={Researchers} />
              <Route path='/startups' component={Startups} />
              <Route path='/corporates' component={Corporates} />
              <Route path='/contacts' component={Contact} />
              <Route path='/faq' component={Faq} />
              <Route path='/webinar' component={Webinar} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={SignUp} />
              <Route path='/serviceEnquiry' component={ServiceEnquiry} />
              <Route path='/ideaEvaluation' component={StudentEvaluation} />
              <Redirect to="/home" />
          </Switch>

        
        <Footer />
      </div>
    </BrowserRouter>
    
    );
  }
}

export default App;
