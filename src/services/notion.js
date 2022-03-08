import { useEffect } from 'react';

const dotenv = require('dotenv').config();
const { Client } = require('@notionhq/client');

const database_id = process.env.NOTION_DATABASE_ID;

export const giveMeAnswer = async () => {
    const response = await notion.databases.retrieve({
        database_id: database_id,
    })
    console.log(response);
}
//  giveMeAnswer() 

// const database_id = process.env.NOTION_DATABASE_ID
// module.exports =  async function getVideos(){
//     const payload = {
//         path:`databases/${database_id}/query`,
//         method: 'POST'
//     }
//     const {results} = await notion.request(payload)

//     const vidoes = results.map(page => {
//         return{
//             id: page.id,
//             title: page.properties.Name.title[0].text.content,
//             date: page.properties.Date.date.start,
//             tags: page.properties.Tags.rich_text[0].text.content,
//             description: page.properties.Description.rich_text[0].text.content
//         }
//     })

//     return vidoes
// }