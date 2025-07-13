import { Mastra } from "@mastra/core";

import { chefBoris } from "./agents/chefBoris";

export const mastra = new Mastra({
    agents: { chefBoris },
});