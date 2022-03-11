import { useEffect } from "react";
import { Page } from "../../Page";
import { UserInput } from "./UserInput";

export function Login({ users, user, setUser }) {
  const logout = () => setUser(undefined);

  useEffect(() => { // Run when notion-data is recieved
    if (localStorage['user'] && users) { // If user is cached
      setUser(users.find(user => user.id === localStorage['user'])); // Set the user
    }
  }, [users, setUser]);

  useEffect(() => { // Run when user is changed
    if (user === false) return; // Don't run this on initial render

    if (user === undefined) return localStorage.removeItem('user'); // Remove information about cached user

    localStorage['user'] = user.id; // Set information about cached user
  }, [user]);

  return (
    !user ? ( // If user is not set
      <main>
        {
          users ? ( // If notion-data is recieved
            <UserInput {...{ users, setUser }} /> // Ask for input
          ) : ( // If notion-data has not loaded
            <h1 className="title">Loading...</h1>
          )
        }
      </main>
    ) : ( // If user is set
      <Page {...{ user, logout }} /> // Output app
    )
  );
};