#!/usr/bin/env node

import { UserInput } from "./lib/input-user.js";
import { Command } from "commander";
import { GenerateStructure } from "./lib/generateStructure.js";
import { ConfigRESTAPI } from "./lib/configRESTAPI.js";
import { ConfigDatabaseDriver } from "./lib/configDatabase.js";
import { ConfigORM } from "./lib/configORM.js";
interface commandProps {
  yes: boolean;
}

export async function Main() {
  const program = new Command();

  // basic config
  program
    .name("generator-rest-api-express")
    .description("cli tools for creating template express rest api")
    .version("1.0.0");

  try {
    // create command
    program
      .command("init-rest-api")
      .description("passing to question section")
      .option("-y,--yes", "use default value to all questions")
      .action(async (options: commandProps) => {
        // Take user requirements
        const answers = await UserInput(options.yes);
        console.log(answers);

        // Generate structure
        await GenerateStructure(answers.framework);

        // Initialize package.json, tsconfig.json and default dependencies
        await ConfigRESTAPI(answers.framework);

        // Config database driver (if used)
        if (answers.db) {
          await ConfigDatabaseDriver(answers.db);
          if (answers.orm) {
            // Config ORM (if used)
            await ConfigORM(answers.orm)
          }
        }
      });
    program.parse();
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error("An unexpected error occurred.");
    }
    process.exit(1)
  }
}

Main();
