import React from 'react'
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import SignUp from './Components/SignUp';
import Home from './Pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Archive from './Components/Archive';
import Posts from './Components/Posts';
import InputPosts from './Pages/InputPosts';

function App() {
  const currentUser = true;
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/posts">
          <Home />
        </Route>
        <Route path="/signup">
          {currentUser ? <Home /> : <SignUp />}
        </Route>
        <Route path="/PostInput">{currentUser ? <InputPosts /> : <Login />}</Route>
        <Route path="/login">{currentUser ? <Home /> : <Login />}</Route>
  
        <Route path="/profile">
          {currentUser ? <Profile /> : <Login />}
        </Route>

        <Route path="/active">
          {currentUser ? <Posts /> : <Login />}
        </Route>
        <Route path="/archive">
          {currentUser ? <Archive /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
