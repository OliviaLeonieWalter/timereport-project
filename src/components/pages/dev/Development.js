import { useState, useEffect } from "react";
import { fetchRoles } from "../../../data/fetchRoles";

export function Development({ user }) {
  const [roles, setRoles] = useState(false);

  useEffect(() => {
    fetchRoles().then(response => setRoles(response));
  }, []);

  useEffect(() => {
    if (!roles) return;

    console.log(roles);
  }, [roles]);

  return (
    <>
      { }
    </>
  );
};