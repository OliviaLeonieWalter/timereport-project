import { useState } from "react";
import { UserInput } from "./UserInput";
import { DatabaseInput } from "./DatabaseInput";

export function Development({ users, databases }) {
  const [user, setUser] = useState(false);
  const [database, setDatabase] = useState(false);

  if (!users) return (
    <>
      <h1 className="title">Loading...</h1>
    </>
  );

  if (!user) return (
    <>
      <UserInput {...{ users, setUser }} />
    </>
  );

  if (!databases) return (
    <>
      <h1 className="title">Loading...</h1>
    </>
  );

  if (!database) return (
    <>
      <DatabaseInput {...{ databases, setDatabase }} />
    </>
  );

  return (
    <>
      <h1 className="title">{user.name} - {database.title[0].plain_text} {database.icon.emoji}</h1>
      <button onClick={() => { setUser(false); setDatabase(false); }}>Reset</button>
    </>
  );
};