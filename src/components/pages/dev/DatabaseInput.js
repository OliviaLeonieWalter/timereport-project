import "./input.scss";

export function DatabaseInput({ databases, setDatabase }) {
  return (
    <section className="input">
      <h1 className="title">Select Database</h1>
      <ul>
        {
          databases.map(database =>
            <li key={database.id} onClick={() => setDatabase(database)}>{database.title[0].plain_text} {database.icon.emoji}</li>
          )
        }
      </ul>
    </section>
  );
};
