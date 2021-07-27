import React, { useState, useContext } from 'react';
// import {UsersContext} from '../Contexts/UsersContext'

export default function UserDetail({user, click, id}) {
    // const {id, street, city, state, zip, phone, createdAt, lastLoggedIn} = useContext(UsersContext);

    // console.log('what is user now', id)
  return (
    <div className="user-detail">
      {user.id === id ? (
        <div>
          <div>
            <h3>
              Address
              <p>{`${user.street} ${user.city} ${user.state} ${user.zip}`}</p>
            </h3>
            <h3>
              Phone
              <p>{user.phone}</p>
            </h3>
            <h3>
              Created At
              <p>{user.createdAt}</p>
            </h3>
            <h3>
              Last Logged In
              <p>{user.lastLoggedIn}</p>
            </h3>
          </div>
        </div>
      ) : null}
    </div>
  );
}
