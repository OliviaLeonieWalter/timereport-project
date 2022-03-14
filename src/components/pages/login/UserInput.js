import "./input.scss";

export function UserInput({ setUser, users }) {
  return (
    <section className="input">
      <h1 className="title">Select User</h1>
      <ul>
        {
          users.map(user =>
            <li key={user.id} onClick={() => setUser(user)} children={user.name} />
          )
        }
      </ul>
    </section>

  );
};
