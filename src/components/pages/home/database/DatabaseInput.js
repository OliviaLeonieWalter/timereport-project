export function DatabaseInput({ setDatabaseID }) {
  return (
    <>
      <label htmlFor="database">Select a database: </label>
      <select id="database">
        <option value="b69ed7b7a5b14fbbb1014b077588fa11">Projects</option>
        <option value="0aa4cb026d33405b83158084cdf52483">People</option>
        <option value="eafb947e164b4c6592748836e1e2cecc">Timereports</option>
      </select>

      <button onClick={() => setDatabaseID(document.getElementById('database').value)}>Select</button>
    </>
  );
};