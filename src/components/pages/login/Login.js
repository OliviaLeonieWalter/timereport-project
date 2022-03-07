

const Login = () => {
    const nameArr = ["kalle", "anna", "bertil", "qwerty"];

    return (
      <form action="/action_page.php">
        <label for="employee">Choose a car:</label>
        <select name="Employees" id="employee">
        <option value="kalle">kalle</option>
        <option value="anna">anna</option>
        <option value="bertil">bertil</option>
        <option value="qwerty">qwerty</option>
        </select>
        <br></br>
        <input type="submit" value="Submit"/>
      </form>
    );
  };
export default Login;