import 'dotenv/config';
import { z } from "zod";

import { mastra } from "./mastra/index.js";
const chefBoris = mastra.getAgent("chefBoris");

// Text response

// const query = `У меня есть кабачок, яйца и соль. Что я могу приготовить?`;
// console.log(`Query: ${query}`);

// const response = await chefBoris.generate([{ role: "user", content: query }]);
// console.log(`\n Шеф Борис: ${response.text}`);

// Streaming response

// const query = `Я нахожусь в гостях. У них в холодильнике есть курица, свинина, молоко,
// морковь, чеснок, сыр, яйца. Он еврей, а она татарка. Что мы можем приготовить на ужин под вино`;
// console.log(`Query: ${query}`);

// const stream = await chefBoris.stream([{ role: "user", content: query }]);
// console.log(`\n Шеф Борис: `);

// for await (const chunk of stream.textStream) {
//     process.stdout.write(chunk);
// }

// console.log("\n\n✅ Рецепт готов!");

// Structured response

const query = `Я хочу приготовить лазанью. Можешь составить рецепт лозаньи?`;
console.log(`Query: ${query}`);

const schema = z.object({
    ingridients: z.array(
        z.object({
            name: z.string(),
            amount: z.string(),
            unit: z.string().optional(),
        })
    ),
    steps: z.array(z.string()),
});

const response = await chefBoris.generate(
    [{ role: "user", content: query }],
    { output: schema }
);
console.log(`\n Шеф Борис: ${JSON.stringify(response.object, null, 2)}`);
