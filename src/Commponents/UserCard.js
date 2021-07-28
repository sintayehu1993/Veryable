import React, { useState, useContext } from 'react';
import { UsersContext } from '../Contexts/UsersContext';
import userLogo from '../icons/user.svg';
import UserDetail from './UserDetail';
import expandMore from '../icons/expand_more.svg';
import expandLess from '../icons/expand_less.svg';

export default function UserCard() {
  //   const [click, setClick] = useState(false);
  //   const [id, setId] = useState(null);

  const { click, setClick, users, id, setId } = useContext(UsersContext);

  //   const onClickHandler = () => {
  //     setClick(!click);
  //     setId(user.id)

  //   };
  //{click ? <UserDetail person={user} id={user.id} /> : null}
  return (
    <div className="user-container">
      {users.map((user) => (
        <ul key={user.id} className="user-list">
          
            {' '}
            <li className={id === user.id ? "user-card-info" :"user-card-infoMore" }>
              <img className="user-icon" src={userLogo} alt="user" />
              <div className="user-Info">
              <h3 className="user-name">{`${user.firstName} ${user.lastName}`}</h3>
              <h4 className="user-role">{user.role}</h4>
              <h4 className="user-email">{user.email}</h4>
              <br />
              {id === user.id ? <UserDetail user={user} id={user.id} /> : null}
              </div>
              <img
              onClick={() => {
                setClick(!click);
                if (click === true) {
                  setId(user.id);
                } else {
                  setId(null);
                }
              }}
              className="expand-more-icon"
              src={user.id === id ? expandLess : expandMore}
              alt="expand"
            />
            </li>
        </ul>
      ))}
    </div>
  );
}
