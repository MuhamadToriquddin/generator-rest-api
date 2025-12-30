import { RunCommand } from "./runcommand.js";

export async function ConfigRESTAPI(framework: string) {
  const expressTasks = [
    {
      label: "Initialize package.json",
      command: "npm",
      args: ["init", "-y"],
    },
    {
      label: "Setup scripts",
      command: "npm",
      args: [
        "pkg",
        "set",
        `type="module"`,
        `scripts.dev="tsx src/server.ts"`,
        `scripts.start="node dist/main.js"`,
        `scripts.build="tsc"`,
        `scripts.rebuild="rimraf dist && tsc"`,
      ],
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
        "rimraf",
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
        "@types/node",
      ],
    },
    {
      label: "Initialize tsconfig.json",
      command: "npx",
      args: [
        "tsc",
        "--init",
        "--outDir",
        "./dist",
        "--rootDir",
        "./src",
        "--verbatimModuleSyntax",
        "false",
      ],
    },
  ];

  switch (framework) {
    case "express":
      for (const task of expressTasks) {
        try {
          console.log(`[PROCESS] ${task.label}`);
          await RunCommand(task.command, task.args);
          console.log(`[SUCCESS] ${task.label}`);
        } catch (e) {
          if (e instanceof Error){
            throw new Error(`[FAILED] ${task.label} : ${e.message}`)
          }
          throw new Error(`[FAILED] ${task.label}`)
        }
      }
      break;
  }
}
