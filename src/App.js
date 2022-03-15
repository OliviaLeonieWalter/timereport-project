import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from './components/pages/login/Login';
import { Home } from './components/pages/home/Home';
import { Development } from "./components/pages/dev/Development";
import { Example } from "./components/pages/example/Example";
import { Error } from "./components/pages/error/Error";
import { useEffect, useState } from "react";

export default function App() {
  const [user, setUser] = useState(false);
  const [users, setUsers] = useState(false);
  const [databases, setDatabases] = useState(false);

  useEffect(() => { // Run on initial render
    fetch('/users') // Fetch users from notion
      .then(users => users.json())
      .then(users => setUsers(users))
      .catch(error => console.log(error));
    fetch('/databases') // Fetch databases from notion
      .then(databases => databases.json())
      .then(databases => setDatabases(databases))
      .catch(error => console.log(error));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login {...{ users, user, setUser }} />}>
          <Route index element={<Home />} />
          <Route path="dev" element={<Development {...{ users, databases }} />} />
          <Route path="example" element={<Example {...{ user, databases }} />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}