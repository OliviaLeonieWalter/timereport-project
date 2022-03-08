import { useState } from "react";
import { UserInput } from "./user/UserInput";
import { DatabaseInput } from "./database/DatabaseInput";
import { Database } from "./database/Database";

export function Home() {
  const [user, setUser] = useState(false);
  const [databaseID, setDatabaseID] = useState(false);

  if (!user) return <UserInput {...{ setUser }} />;

  if (!databaseID) return <DatabaseInput {...{ setDatabaseID }} />;

  return (
    <Database {...{ user, databaseID }} />
  );
};