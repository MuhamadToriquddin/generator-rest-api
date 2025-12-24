import { UserInput } from "./task/input-user.js"
import { Command } from "commander"

interface commandProps{
    yes:boolean
}

export async function Main(){
    const program = new Command()

    // basic config
    program.name("generator-rest-api-express").description("cli tools for creating template express rest api").version("1.0.0")

    // create command
    program
    .command("init-rest-api")
    .description("passing to question section")
    .option("-y,--yes","use default value to all questions")
    .action(async(options:commandProps)=>{
        // user answer blueprint questions
        const answers = await UserInput(options.yes)
        console.log(answers)
        // generate structure using blueprint

        // excecute npm init -y to create package.json

        // excecute npm install to install basic library and frameworks

        // excecute npx tsc --init

        // npm install database and orm library

    })
    program.parse()
}

Main()