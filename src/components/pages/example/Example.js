import { useEffect, useState } from "react";

export function Example() {
  const [project, setProject] = useState("None");
  const [week, setWeek] = useState(0);
  const [comment, setComment] = useState("");

  function B() {
    var input = document.getElementById("projectSelect");
    var inputVal = "";
    if (input) {
      inputVal = input.value;
      setProject(`${inputVal}`);
      console.log(inputVal);
    }
  }

  function C() {
    var input = document.getElementById("weekInput");
    var inputVal = "";
    if (input.value > 52 || input.value < 0 || input.value === "") {
      console.log("error");
    }
    else {
      if (input) {
        inputVal = input.value;
        setWeek(`${inputVal}`);
        console.log(inputVal);
      }
    }
  }

  function D() {
    var input = document.getElementById("commentInput");
    var inputVal = "";
    if (input) {
      inputVal = input.value;
      setComment(`${inputVal}`);
      console.log(inputVal);
    }
  }

  return (
    <div>
      <h2 id="e">Rapporterar för: {project}</h2>
      <select id="projectSelect">
        <option value="Project_a">Project_a</option>
        <option value="Project_b">Project_b</option>
      </select>
      <button onClick={B}>Klicka</button>
      <br />

      <h2>Vecka: {week}</h2>
      <input id="weekInput" type="number" min="0" max="52"></input>
      <button onClick={C}>Klicka</button>
      <br />

      <h2>Kommentar:</h2>
      <input id="commentInput" type="text"></input>
      <button onClick={D}>Klicka</button>
    </div>
  );
};