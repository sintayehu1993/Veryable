import React, { useState } from 'react';
import groups from './icons/group.svg';
import './App.css';
import UserCard from '../src/Commponents/UserCard';
//front-end-coding-challenge
import { UsersContext } from './Contexts/UsersContext';
import users from '../src/dummydata';
// import expandMore from './icons/expand_more.svg';
// import expandLess from './icons/expand_less.svg';
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core'

function App() {
  const [click, setClick] = useState(false);
  const [id, setId] = useState(null);
  // const [expand, setExpand] = useState([expandLess,expandMore]);

  return (
    <div className="App">
      <header className="header-container">
        {' '}
        <nav className="nav-header">
          <img src={groups} className="group-logo" alt="logo" /> <Typography variant="h1"> Users</Typography>
        </nav>
      </header>
      <UsersContext.Provider value={{ click, setClick, users, id, setId, }}>
        <UserCard />
      </UsersContext.Provider>
    </div>
  );
}

export default App;
