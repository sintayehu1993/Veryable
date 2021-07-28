import React, { useState } from 'react';
import './App.css';
import UserCard from '../src/Commponents/UserCard';
import { UsersContext } from './Contexts/UsersContext';
import users from '../src/dummydata';
import PeopleIcon from '@material-ui/icons/People';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  usersIcon: {
    color: 'rgb(32 , 129, 195)',
    padding: 0,
  },
});
function App() {
  const [click, setClick] = useState(false);
  const [id, setId] = useState(null);
  const classes = useStyles();

  return (
    <div className="App">
      <header className="header-container">
        {' '}
        <h1>
          {' '}
          <PeopleIcon className={classes.usersIcon} /> Users
        </h1>
      </header>
      <UsersContext.Provider value={{ click, setClick, users, id, setId }}>
        <UserCard />
      </UsersContext.Provider>
    </div>
  );
}

export default App;
