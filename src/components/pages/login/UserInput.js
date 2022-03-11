import "./input.scss";

export function UserInput({ users, setUser }) {
  return (
    <section className="input">
      <h1 className="title">Select User</h1>
      <ul>
        {
          users.map(user =>
            <li key={user.id} onClick={() => setUser(user)}>{user.name}</li>
          )
        }
      </ul>
    </section>

  );
};
