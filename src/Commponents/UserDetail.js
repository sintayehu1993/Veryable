import React from 'react';

export default function UserDetail({ user }) {
  const getDate = (timestamp) => {
    let dateObj = new Date(timestamp);
    console.log('what is month', dateObj);
    let month = dateObj.getMonth() + 1;
    let year = dateObj.getFullYear();
    let date = dateObj.getDate();
    //---- exact time
    let hours = dateObj.getHours();
    let minutes = dateObj.getMinutes();

    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    minutes = minutes < 19 ? '0' + minutes : minutes;
    let exactTime = hours + ':' + minutes + ' ' + ampm;
    return `${month}/${date}/${year} ${exactTime}`;
  };
  const setPhoneNum = (str) => {
    str.split('');
    let result = '';
    for (let i = 0; i < str.length; i++) {
      // console.log('resturn string', result)
      if (i === 0) {
        result += `(${str[i]}`;
      } else if (i === 3) {
        result += `) ${str[i]}`;
      } else if (i === 5) {
        result += `${str[i]}-`;
      } else {
        result += str[i];
      }
    }
    return result;
  };
  return (
    <div className="detail-container">
      <h3>
        Address
        <p>{`${user.street}, ${user.city} ${user.state}, ${user.zip}`}</p>
      </h3>
      <h3>
        Phone
        <p>{setPhoneNum(user.phone)}</p>
      </h3>
      <h3>
        Created At
        <p>{getDate(user.createdAt)}</p>
      </h3>
      <h3>
        Last Logged In
        <p>{getDate(user.lastLoggedIn)}</p>
      </h3>
    </div>
  );
}
