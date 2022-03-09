import express from "express";
import { Client } from "@notionhq/client";

const app = express();
const port = 3001;

const token = "secret_iAH7qE3H2iPsk4oBTiTN99lqHR71VyEYoNHD1yY2jvJ";
const notion = new Client({ auth: token });

app.listen(port, console.log(`Server created on port: ${port}`));

app.get('^/database/:databaseId(*)', (req, res) => {
  notion.databases.retrieve({ database_id: req.params.databaseId })
    .then(database => res.send(database))
    .catch(() => res.sendStatus(404));
});

app.get('^/databases/', (req, res) => {
  notion.databases.query('page')
    .then(database => res.send(database))
    .catch(() => res.sendStatus(404));
});
