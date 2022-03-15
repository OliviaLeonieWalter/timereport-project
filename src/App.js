import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Page } from './components/Page';
import { Home } from './components/pages/home/Home';
import { Development } from "./components/pages/dev/Development";
import { Example } from "./components/pages/example/Example";
import { Roles } from "./components/pages/roles/Roles";
import { Error } from "./components/pages/error/Error";
import { useEffect, useState } from "react";

export default function App() {
  const [user, setUser] = useState(false);
  const [users, setUsers] = useState(false);
  const [roles, setRoles] = useState(false);
  const [databases, setDatabases] = useState(false);

  useEffect(() => {
    fetch('/users')
      .then(users => users.json())
      .then(users => setUsers(users))
      .catch(error => console.log(error));

    fetch('roles.json')
      .then(roles => roles.json())
      .then(roles => setRoles(roles))
      .catch(error => console.log(error));

    fetch('/databases')
      .then(databases => databases.json())
      .then(databases => setDatabases(databases))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    if (!users || !roles) return;

    if (localStorage['user']) setUser(users.find(user => user.id === localStorage['user']));

    users.forEach(user => {
      const roleID = Object.values(roles).findIndex(role => role.includes(user.id));
      user.role = roleID !== -1 ? Object.keys(roles).at(roleID) : 'user';
    });

  }, [users, roles]);

  useEffect(() => {
    if (user === false) return;

    if (user === undefined) return localStorage.removeItem('user');

    localStorage['user'] = user.id;
  }, [user]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page {...{ user, setUser, users }} />}>
          <Route index element={<Home />} />
          <Route path="dev" element={<Development {...{ users, databases }} />} />
          <Route path="example" element={<Example {...{ user, databases }} />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}