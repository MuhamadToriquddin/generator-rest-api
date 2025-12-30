import { GetCurrentPath } from "./getCurrentPath.js";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { RunCommand } from "./runcommand.js";
import { MoveTemplate } from "./moveTemplate.js";
import { AppendText } from "./appendText.js";

export async function ConfigORM(orm: string) {
  const targetDir = GetCurrentPath();
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const setupDir = path.resolve(__dirname, `../../templates/orm/${orm}`);
  switch (orm) {
    case "sequelize":
      try {
        console.log("[PROCESS] Setup sequelize");
        await RunCommand("npm", ["install", "sequelize"]);
        await AppendText(`${targetDir}/.env`,`DB_DIALECT="${orm}"`)
        await MoveTemplate(setupDir, `${targetDir}/src`);
        console.log("[SUCCESS] Setup sequelize")
      } catch (e) {
        if (e instanceof Error) {
          throw new Error(e.message);
        }
        throw new Error("[FAILED] Setup sequelize.");
      }
      break;
    case "prisma":
      try {
        console.log("[PROCESS] Setup prisma");
        await RunCommand("npm", ["install", "prisma", "@prisma/client","@prisma/adapter-pg"]);
        await RunCommand("npx", ["prisma", "init", "--db","--output","../generated/prisma"]);
        console.log("[SUCCESS] Setup prisma")
      } catch (e) {
        if (e instanceof Error) {
          throw new Error(e.message);
        }
        throw new Error("[FAILED] Setup prisma.");
      }
  }
}
