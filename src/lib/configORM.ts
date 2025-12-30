import { RunCommand } from "./runcommand.js";

export async function ConfigDatabaseDriver(db: string) {
  const tasksPostgres = [
    {
      label: "Initialize database driver for Postgresql",
      command: "npm",
      args: ["install", "pg"],
    },
    {
      label: "Initialize database driver types for Mysql",
      command: "npm",
      args: ["install", "@/types/pg"],
    },
  ];

  const tasksMysql = [
    {
      label: "Initialize database driver for Mysql",
      command: "npm",
      args: ["install", "mysql2"],
    },
  ];

  switch (db) {
    case "postgres":
      for (const task of tasksPostgres) {
        try {
          console.log(`[PROCESS] ${task.label}`);
          await RunCommand(task.command, task.args);
          console.log(`[SUCCESS] ${task.label}`);
        } catch (e) {
          if (e instanceof Error){
            throw new Error(`[FAILED] ${task.label} : ${e.message}`);  
          }
          throw new Error(`[FAILED] ${task.label}`);
        }
      }
    break;
    
    case "mysql":
      for (const task of tasksMysql) {
        try {
          console.log(`[PROCESS] ${task.label}`);
          await RunCommand(task.command, task.args);
          console.log(`[SUCCESS] ${task.label}`);
        } catch (e) {
          if (e instanceof Error){
            throw new Error(`[FAILED] ${task.label} : ${e.message}`);  
          }
          throw new Error(`[FAILED] ${task.label}`);
        }
      }
    break;
  }
}
