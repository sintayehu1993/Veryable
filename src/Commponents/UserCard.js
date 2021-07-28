import React, { useContext } from 'react';
import { UsersContext } from '../Contexts/UsersContext';
import UserDetail from './UserDetail';
import expandMore from '../icons/expand_more.svg';
import expandLess from '../icons/expand_less.svg';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';

//this styling is for the users icons only
const useStyles = makeStyles({
  userIcon: {
    border: 0,
    color: 'rgb(104, 170, 171)',
    height: '40px',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 25,
  },
  viewerIcon: {
    border: 0,
    color: 'rgb(126, 126, 126)',
    height: '40px',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 25,
  },
  adminIcon: {
    border: 0,
    color: 'rgb(32 , 129, 195)',
    height: '40px',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 25,
  },
});

export default function UserCard() {
  const classes = useStyles();

  const { click, setClick, users, id, setId } = useContext(UsersContext);

  return (
    <div className="user-container">
      {users.map((user) => (
        <ul key={user.id} className="user-list">
          <li
            className={id === user.id ? 'user-card-info' : 'user-card-infoMore'}
          >
            {user.role === 'User' ? (
              <PersonIcon className={classes.userIcon} />
            ) : user.role === 'Viewer' ? (
              <PersonIcon className={classes.viewerIcon} />
            ) : user.role === 'Administrator' ? (
              <PersonIcon className={classes.adminIcon} />
            ) : null}
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
