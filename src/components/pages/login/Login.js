
let selectedEmployee;
const Login = () => {
   

    return (
      <form action="/Login.js" method="post">
        <label for="employee">Choose a employee:</label>
        <select name="Employees" id="employee">
        <option value="kalle">kalle</option>
        <option value="anna">anna</option>
        <option value="bertil">bertil</option>
        <option value="qwerty">qwerty</option>
        </select>
        <br></br>
        <input type="submit" value="Submit" onclick="getEmployee()"/>
      </form>
    );
  };
  function getEmployee(){
    var employee = document.getElementById("employee");
    console.log(employee);
  }


export default Login;