import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Page } from './components/Page';
import { Home } from './components/pages/home/Home';
import { Development } from "./components/pages/dev/Development";
import { Error } from "./components/pages/error/Error";
import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState(false);
  const [databases, setDatabases] = useState(false);

  useEffect(() => {
    fetch('/users')
      .then(users => users.json())
      .then(users => setUsers(users))
      .catch(error => setUsers(false));
    fetch('/databases')
      .then(databases => databases.json())
      .then(databases => setDatabases(databases))
      .catch(error => console.log(error));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Home />} />
          <Route path="dev" element={<Development {...{ users, databases }} />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}