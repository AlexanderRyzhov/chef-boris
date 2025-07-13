import  { mastra } from "./mastra/index.js";
import 'dotenv/config';

const chefBoris = mastra.getAgent("chefBoris");

// Text response

const query = `У меня есть кабачок, яйца и соль. Что я могу приготовить?`;
console.log(`Query: ${query}`);

const response = await chefBoris.generate([{ role: "user", content: query }]);
console.log(`\n Шеф Борис: ${response.text}`);

