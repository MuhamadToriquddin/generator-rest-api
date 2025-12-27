#!/usr/bin/env node

import { UserInput } from "./task/input-user.js"
import { Command } from "commander"
import { GenerateStructure } from "./task/generate-structure.js"
import {InstallDependency} from "./task/install-dependency-api.js"

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
        GenerateStructure()
        // excecute npm init -y to create package.json
        InstallDependency()
        // excecute npm install to install basic library and frameworks

        // excecute npx tsc --init

        // npm install database and orm library

    })
    program.parse()
}

Main()