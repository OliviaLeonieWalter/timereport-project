import { render } from "@testing-library/react";
import { useState } from "react";
import { useEffect } from "react";

export function ViewTimereports({timereports}) {
  const [aa, setAa] = useState(0);

  useEffect(()=>{
    if(timereports){
       setAa(timereports.results.length)

      for(var i = 0; i < aa; i++){
         render(
           <>
             <h3>ReportId:</h3><p> {timereports.results[i].id}</p>
             <h3>Project:</h3><p> {timereports.results[i].properties.Project.rich_text[0].plain_text}</p>
             <h3>Date:</h3><p> {timereports.results[i].properties.Date.date.start}</p>
             <h3>Hours:</h3><p> {timereports.results[i].properties.Hours.number}</p>
             <h3>Comment:</h3><p> {timereports.results[i].properties.Comment.rich_text[0].plain_text}</p>
             <br/>
            </>
         )
      }
    }
  })

  return (
    <>
      
    </>
  );
};