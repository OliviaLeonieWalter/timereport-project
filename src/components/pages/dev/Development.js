import { useState, useEffect } from "react";
import { getIsAdmin } from "../../../data/getIsAdmin"

export function Development({ user }) {
  const [isAdmin, setIsAdmin] = useState(false)
  
  useEffect(() => {
    getIsAdmin(user.id).then(response => setIsAdmin(response))
  }, [])

  return (
    <>
      <h1>{isAdmin ? 'yes' : 'no'}</h1>
    </>
  );
};