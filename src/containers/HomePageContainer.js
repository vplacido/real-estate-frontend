// import React from 'react';
import Search from '../components/Search';
import NavBar from '../NavBar';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import SignInForm from '../SignInForm';
import LoginForm from '../LoginForm';
import HomePageListingCon from './HomePageListingsCon'
// class HomePageContainer extends React.Component {
function HomePageContainer() {    

  const [user, setUser] = useState({})
  const [form, setForm] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token){
      fetch(`http://localhost:3000/auto_login`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(data => {
        setUser(data)
        // console.log(data)
      })
    }
  }, [])

  const handleLogin = (user) => {
    setUser(user)
  }

  const handleFormSwitch = (input) => {
    setForm(input)
  }

  const handleAuthClick = () => {
    const token = localStorage.getItem("token")
    fetch(`http://localhost:3000/user_is_authed`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  // console.log(user)

  const renderForm = () => {
    switch(form){
      case "login":
        return <LoginForm handleLogin={handleLogin}/>
        break;
      default:
        return <SignInForm handleLogin={handleLogin}/>
        }
    }
  
    // render() {
    return (
        <div>
            <NavBar handleFormSwitch={handleLogin}/>
            <Search />
            <HomePageListingCon />
        </div>
    )
    //}
}

export default HomePageContainer;