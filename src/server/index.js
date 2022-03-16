import express from "express";
import { Client } from "@notionhq/client";
import cors from "cors";
import bodyParser from "body-parser";
var jsonParser = bodyParser.json();

const app = express();
app.use(cors());
const port = 3001;

const token = "secret_iAH7qE3H2iPsk4oBTiTN99lqHR71VyEYoNHD1yY2jvJ";
const databaseId = "eafb947e164b4c6592748836e1e2cecc";
const notion = new Client({ auth: token });

app.listen(port, console.log(`Server created on port: ${port}`));

app.get('^/databases', (req, res) => {
  notion.search({ filter: { property: 'object', value: 'database' } })
    .then(database => res.send(database.results))
    .catch(error => res.sendStatus(404).send(error.message));
});

app.get('^/database/:databaseID(*)', (req, res) => {
  notion.databases.retrieve({ database_id: req.params.databaseID })
    .then(database => res.send(database))
    .catch(error => res.sendStatus(404).send(error.message));
});

app.get('^/users', (req, res) => {
  notion.users.list()
    .then(users => res.send(users.results.filter(user => user.type === 'person')))
    .catch(error => res.sendStatus(404).send(error.message));
});

app.get('^/user/:userID(*)', (req, res) => {
  notion.users.retrieve({ user_id: req.params.userID })
    .then(user => res.send(user))
    .catch(error => res.sendStatus(404).send(error.message));
});

app.post("/submitData", jsonParser, async(req, res) =>{
  
  const person = req.body.person;
  const hours = req.body.hours;

  try{
    const response = await notion.page.create({
      parent: {database_id: databaseId},
      properties: {
        person: {
          title: [
            {
              Text: {
                content: person
              }
            }
          ]
        },
        hours: {
          rich_text: [
            {
              Text: {
                content: hours
              }
            }
          ]
        }
      }
    })
    console.log(response);
    console.log("okay");
  } catch(error){
    console.log(error);
  }
});