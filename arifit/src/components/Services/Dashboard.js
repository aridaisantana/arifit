import React from 'react';
import UserLogged from './userLoggedService';
import UserNotLogged from './userNotLogged';


export default function Dashboard({user}) {
 
  return (
    <div>
      {
         user ? <UserLogged user={user} /> : <UserNotLogged />
      }
    </div>
   
  );
}
