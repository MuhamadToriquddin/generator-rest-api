import { RunCommand } from "./runcommand.js";

export async function ConfigRESTAPI() {
  const tasks = [
    {
      label: "Initialize package.json",
      command: "npm",
      args: ["init", "-y"],
    },
    {
      label: "Setup scripts",
      command: "npm",
      args: ["pkg", "set",`type="module"` ,`scripts.dev="tsx src/server.ts"`,`scripts.start="node dist/main.js"`,`scripts.build="tsc"`,`scripts.rebuild="rimraf dist && tsc"`],
    },
    {
      label: "Install default dependency for REST API",
      command: "npm",
      args: [
        "install",
        "express",
        "dotenv",
        "cors",
        "express-rate-limit",
        "helmet",
        "morgan",
        "typescript",
        "tsx",
        "zod",
        "rimraf"
      ],
    },
    {
      label: "Install default dependency types for REST API",
      command: "npm",
      args: [
        "install",
        "-D",
        "@types/express",
        "@types/cors",
        "@types/helmet",
        "@types/morgan",
        "@types/node"
      ],
    },
    {
      label: "Initialize tsconfig.json",
      command: "npx",
      args: ["tsc", "--init", "--outDir", "./dist", "--rootDir", "./src", "--verbatimModuleSyntax", "false"],
    },
  
  ];

  for (const task of tasks) {
    try {
      console.log(`[PROCESS] ${task.label}`);
      await RunCommand(task.command, task.args);
      console.log(`[SUCCESS] ${task.label}`);
    } catch (error) {
      console.error(`[FAILED] ${task.label}`);
      console.error(error);
    }
  }
}
