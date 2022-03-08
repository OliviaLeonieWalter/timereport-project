import { useEffect, useState } from "react";

export function Database({ user, databaseID }) {
  const [database, setDatabase] = useState(false);

  useEffect(() => {
    fetch(`/database/${databaseID}`)
      .then(response => response.json())
      .then(response => setDatabase(response));
  }, [databaseID]);

  useEffect(() => {
    if (database) console.dir(database);
  }, [database]);

  if (!database) return <h1>Loading database...</h1>;

  return (
    <>
      <h1>User: {user}</h1>
      <h1>DatabaseID: {databaseID}</h1>
    </>
  );
};