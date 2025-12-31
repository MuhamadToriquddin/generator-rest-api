import { RunCommand } from "./runcommand.js";

export async function ConfigDatabaseDriver(db: string, framework: string) {
  const tasksPostgres = [
    {
      label: "Initialize database driver for Postgresql",
      commandExpress: "npm",
      argsExpress: ["install", "pg", "pg-hstore"],
    },
    {
      label: "Initialize database driver types for Postgresql",
      commandExpress: "npm",
      argsExpress: ["install", "-D", "@types/pg"],
    },
  ];

  const tasksMysql = [
    {
      label: "Initialize database driver for Mysql",
      commandExpress: "npm",
      argsExpress: ["install", "mysql2"],
    },
  ];

  const tasksMongoDB = [
    {
      label: "Initialize database driver for MongoDB",
      commandExpress: "npm",
      argsExpress: ["install", "mongodb"],
    },
  ];

  switch (db) {
    case "postgres":
      for (const task of tasksPostgres) {
        try {
          console.log(`[PROCESS] ${task.label}`);
          if (framework == "express") {
            await RunCommand(task.commandExpress, task.argsExpress);
          } else {
            console.error(`[FAILED] Framework ${framework} not in the list`);
          }
          console.log(`[SUCCESS] ${task.label}`);
        } catch (error) {
          console.error(`[FAILED] ${task.label}`);
          console.error(error);
        }
      }
      break;

    case "mysql":
      for (const task of tasksMysql) {
        try {
          console.log(`[PROCESS] ${task.label}`);
          if (framework == "express") {
            await RunCommand(task.commandExpress, task.argsExpress);
          } else {
            console.error(`[FAILED] Framework ${framework} not in the list`);
          }
          console.log(`[SUCCESS] ${task.label}`);
        } catch (error) {
          console.error(`[FAILED] ${task.label}`);
          console.error(error);
        }
      }
      break;

    case "mongodb":
      for (const task of tasksMongoDB) {
        try {
          console.log(`[PROCESS] ${task.label}`);
          if (framework == "express") {
            await RunCommand(task.commandExpress, task.argsExpress);
          } else {
            console.error(`[FAILED] Framework ${framework} not in the list`);
          }
          console.log(`[SUCCESS] ${task.label}`);
        } catch (error) {
          console.error(`[FAILED] ${task.label}`);
          console.error(error);
        }
      }
      break;
  }
}
