export function UserInput({ setUser }) {
  return (
    <>
      <label htmlFor="user">Select a user: </label>
      <select id="user">
        <option value="default">Standard User</option>
        <option value="admin">Administrator</option>
      </select>

      <button onClick={() => setUser(document.getElementById('user').value)}>Select</button>
    </>
  );
};