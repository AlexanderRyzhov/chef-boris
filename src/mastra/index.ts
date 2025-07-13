import { Mastra } from "@mastra/core";

import { chefBoris } from "./agents/chefBoris.js";

export const mastra = new Mastra({
    agents: { chefBoris },
});