import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import SignInForm from './SignInForm';
import LoginForm from './LoginForm';
// import Header from './Header'
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePageContainer from './containers/HomePageContainer';
import ProfileContainer from './containers/ProfileContainer';
import SearchContainer from './containers/SearchContainer'
// import ListingShowPage from './components/ListingShowPage'
import ListingCard from './components/ListingCard'

function App() {
  
  return (
    <div className="App">
        {/* <Header handleFormSwitch={handleFormSwitch}/>
        {
          renderForm()
        }
        <button onClick={handleAuthClick} className="ui button">Access Authorized Route</button> */}
        <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <HomePageContainer />
            </Route>
            <Route exact path="/Login">
              <LoginForm />
            </Route>
            <Route exact path="/SignUp">
              <SignInForm />
            </Route>
            <Route exact path="/Profile">
              <ProfileContainer />
            </Route>
            <Route exact path="/Search">
              <SearchContainer />
            </Route>
            <Route exact path="/Listing/:id">
              <ListingCard />
            </Route>
          </Switch>
        </div>
        </Router>
    </div>
  );
}

export default App;
