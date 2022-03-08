import { giveMeAnswer } from "../../../services/notion";
import { useEffect } from "react";

 const Login = () => {
  useEffect(() => {
    giveMeAnswer();
  }, []);

  function getEmployee() {
    var employeeLoggedIn = document.getElementById("employeeDropdown");

    console.log(employeeLoggedIn.value);
  }

  return (
    <div id="loginSection">
      <select id="employeeDropdown" name="">
        <option value="Kalle">Kalle</option>
        <option value="Anna">Anna</option>
      </select>

      <button id="fetchEmployeeButton" onClick={getEmployee}>Login</button>
    </div>
  );
};

export default Login;