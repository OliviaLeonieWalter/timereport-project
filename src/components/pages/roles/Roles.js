import React from 'react';
import { RNFS } from 'react-native-fs';

export function Roles({ users, roles }) {
  
  function assignRoll(){
    const userInput = document.getElementById("selectUser").value
    const roleInput = document.getElementById("selectRole").value

    console.log(userInput)
    console.log(roleInput)

    const SaveData = (userInput) => {
      const jsonData = JSON.stringify(userInput)
      RNFS.writeFile('roles.json', jsonData)
    }
   } 
  return (
    <div>
      <h1>Manage access</h1>
      <h2>Users:</h2>
      <select id="selectUser">
      {
        users.filter(user => user.role !== "admin").map(user => <option key={user.id} value={user.id}>{user.name}</option>
        )
      }
      </select>
      <h2>Assign role</h2>
      <select id="selectRole">
      {
         Object.keys(roles).map(role => <option key={role} value={role}>{role}</option>
         )
      }
      </select>
      <br />
      <button onClick={assignRoll}>Assign/Save</button>
      
    </div>
    
  );
}
