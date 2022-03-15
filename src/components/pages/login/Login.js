import { UserInput } from "./UserInput";

export function Login({ setUser, users }) {
  return (
    <main>
      {
        users ? (
          <UserInput {...{ setUser, users }} />
        ) : (
          <h1 className="title">Loading...</h1>
        )
      }
    </main>
  );
};