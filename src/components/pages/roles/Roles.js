import React from 'react';


export function Roles({ users, roles }) {

  function assignRoll() {
    const userInput = document.getElementById("selectUser").value;
    const roleInput = document.getElementById("selectRole").value;


    // const existingRoles = Object.keys(roles).filter(role => role.includes(userInput));
    // console.log(existingRoles)

    // existingRoles.forEach(role => Object.values(roles[role]).splice(role.findIndex(userInput)))

    // if (roleID !== -1) roles[Object.keys(roles)[roleID]] = Object.values(roles)[roleID].filter(user => user !== userInput)

    // roles[roleInput].push(userInput);
    // console.log(roles)
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
