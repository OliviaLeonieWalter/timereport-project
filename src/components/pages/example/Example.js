import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function Example({ user, databases }) {
  const [users, setUsers] = useState("");
  const [timereport, setDatabase] = useState(false);
  const [project, setProject] = useState("None");
  const [comment, setComment] = useState("");
  const [hours, setHours] = useState(0);
  const [date, setDate] = useState(new Date());
  const [sendData, setsendData] = useState(false);

  useEffect(() => {
    if (!databases) return;

    const database = databases.find(database => database.title[0].plain_text === 'Timereports');
    if (!database) return;

    setDatabase(database);

  }, [databases]);

  useEffect(() => {
    if (!timereport) return;
    console.log(timereport);
  }, [timereport]);

  useEffect(()=>{
    console.log(Projects.properties);
  })
  
  function getProject() {
    var input = document.getElementById("projectSelect");
    var inputVal = "";
    if (input) {
      inputVal = input.value;
      setProject(`${inputVal}`);
    }
  }

  function getComment() {
    var input = document.getElementById("commentInput");
    var inputVal = "";
    if (input) {
      inputVal = input.value;
      setComment(`${inputVal}`);
    }
  }

  function getHours() {
    var input = document.getElementById("hourInput");
    var inputVal = "";
    if (input.value > 24 || input.value < 0 || input.value === "") {
      console.log("error");
    }
    else {
      if (input) {
        inputVal = input.value;
        setHours(`${inputVal}`);
      }
    }
  }

  useEffect(() => {
    if (user) {
      setUsers(user.name);
    }
  });

  function getAllInfo() {
    getProject();
    getComment();
    getHours();
    setsendData(true);
  }
 
  useEffect(() =>{
    if(sendData){
    
      let hours_ = hours * 1;
      console.log(date)
  
      fetch("http://localhost:3001/submitData", {
        method: "post",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          Person: users,
          Project: project,
          Week: 0,
          Day: "Fredag",
          Hours: hours_,
          Comment: comment,
        })
      })
    }
    setsendData(false);
  })

  return (
    <div>
      <h1>reporting for user: {users}</h1>

      <h2 id="e">Rapporterar för: {project}</h2>
      <select id="projectSelect">
        <option value="Project_a">Project_a</option>
        <option value="Project_b">Project_b</option>
      </select>
      <br />

      <DatePicker selected={date} onChange={date => setDate(date)}  popperPlacement="bottom"/>
      <br/>

      <h2>Timmar: {hours}</h2>
      <input id="hourInput" type="number" min="0" max="24"></input>
      <br />

      <h2>Kommentar:</h2>
      <input id="commentInput" type="text"></input>
      <br />

      <button onClick={getAllInfo}>Knapp..</button>
    </div>
  );
};