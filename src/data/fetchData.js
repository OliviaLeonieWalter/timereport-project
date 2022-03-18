import { fetchRoles } from "./fetchRoles";

export function fetchData({ setUsers, setRoles, setDatabases }) {
  fetchRoles()
    .then(response => setRoles(response))
    .catch(error => console.log(error));

  fetch('/users')
    .then(users => users.json())
    .then(users => setUsers(users))
    .catch(error => console.log(error));

  fetch('/databases')
    .then(databases => databases.json())
    .then(databases => setDatabases(databases))
    .catch(error => console.log(error));
}