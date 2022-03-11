import { useState } from "react";
import { DatabaseInput } from "./DatabaseInput";

export function Development({ databases }) {
  const [database, setDatabase] = useState(false);


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
      <h1 className="title">{database.title[0].plain_text} {database.icon.emoji}</h1>
      <button onClick={() => { setDatabase(false); }}>Reset</button>
    </>
  );
};