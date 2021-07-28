import React, { useState } from 'react';
import groups from './icons/group.svg';
import './App.css';
import UserCard from '../src/Commponents/UserCard';
//front-end-coding-challenge
import { UsersContext } from './Contexts/UsersContext';
import users from '../src/dummydata';

function App() {
  const [click, setClick] = useState(false);
  const [id, setId] = useState(null);
  // const [expand, setExpand] = useState([expandLess,expandMore]);

  return (
    <div className="App">
      <header className="header-container">
        {' '}
        
         <h1> <img src={groups} className="group-logo" alt="logo" />  Users</h1>
       
      </header>
      <UsersContext.Provider value={{ click, setClick, users, id, setId, }}>
        <UserCard />
      </UsersContext.Provider>
    </div>
  );
}

export default App;
