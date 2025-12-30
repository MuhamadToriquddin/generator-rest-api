import { RunCommand } from "./runcommand.js";
import { GetCurrentPath } from "./getCurrentPath.js";
import { MoveTemplate } from "./moveTemplate.js";
import { fileURLToPath } from "node:url";
import path from "node:path";

export async function SetupSequelize() {
  const targetDir = GetCurrentPath();
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const setupDir = path.resolve(
    __dirname,
    `../../templates/orm/sequelize`
  );
  try {
    console.log("[PROCESS] Setup Sequelize");
    await RunCommand("npm", ["install", "sequelize"]);
    await MoveTemplate(setupDir,targetDir)
  } catch (e) {
    if (e instanceof Error){
        throw new Error(`[FAILED] Setup sequelize : ${e.message}`)
    }
    throw new Error(`[FAILED] An unexpected error occurred.`)
  }
}
