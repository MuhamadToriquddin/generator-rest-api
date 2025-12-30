import inquirer from "inquirer";
import path from "node:path";
import process from "node:process";
import { GetCurrentPath } from "./getCurrentPath.js";

interface userInputProps {
  projectName: string;
  framework:string;
  useDB: boolean;
  db?: string;
  useORM?: boolean;
  orm?: string;
}

export async function UserInput(skip: boolean = false) {
  const currentPath = GetCurrentPath()
  const folderName = path.basename(currentPath);
  if (skip == true) {
    return {
      projectName: folderName ,
      framework:"express",
      useDB: true,
      db: "postgres",
      useORM: true,
      orm: "prisma",
    };
  }
  const answers: userInputProps = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Your project name?",
      validate: (input) => {
        if (input.length == 0) {
          return "Project name cannot be empty!";
        }
        return true;
      },
    },
    {
      type: "confirm",
      name: "useDB",
      message: "Do you want to use database?",
      default: false,
    },
    {
      type: "select",
      name: "framework",
      message: "Which framework you want to use?",
      choices: [
        { name: "Express", value: "express" },
      ],
      default: "express",
    },
    {
      type: "select",
      name: "db",
      when: (answers) => answers.useDB == true,
      message: "Which database you want?",
      choices: [
        { name: "Postgresql", value: "postgres" },
        { name: "MySQL", value: "mysql" },
        { name: "MongoDB", value: "mongodb" },
      ],
      default: "postgres",
    },
    {
      type: "confirm",
      name: "useORM",
      when: (answers) => answers.useDB == true,
      message: "Do you want to use ORM?",
      default: false,
    },
    {
      type: "select",
      name: "orm",
      when: (answers) => answers.useORM == true,
      message: "Which database you want?",
      choices: [
        { name: "Prisma", value: "prisma" },
        { name: "Drizzle", value: "drizzle" },
        { name: "Sequelize", value: "sequelize" },
      ],
      default: "prisma",
    },
  ]);
  return answers;
}
