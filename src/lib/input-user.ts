import inquirer from "inquirer";

interface userInputProps{
    projectName:string,
    useDB:boolean,
    db?:string,
    useORM:boolean,
    orm?:string
}

export async function UserInput(){
    const answers:userInputProps = await inquirer.prompt([
        {
            type:"input",
            name:"projectName",
            message:"Your project name?",
            validate:(input)=>{
                if(input.length == 0){
                    return 'Project name cannot be empty!'
                }
                return true
            }
        },
        {
            type:"confirm",
            name:"useDB",
            message:"Do you want to use database?",
            default:false
        },
        {
            type:"select",
            name:"db",
            when:(answers)=>answers.useDB == true,
            message:"Which database you want?",
            choices:[
                {name:"Postgresql",value:"postgres"},
                {name:"MySQL",value:"mysql"},
                {name:"MongoDB",value:"mongodb"},
            ]
        },
                {
            type:"confirm",
            name:"useORM",
            message:"Do you want to use ORM?",
            default:false
        },
        {
            type:"select",
            name:"orm",
            when:(answers)=>answers.useORM == true,
            message:"Which database you want?",
            choices:[
                {name:"Prisma",value:"prisma"},
                {name:"Drizzle",value:"drizzle"},
                {name:"Sequelize",value:"sequelize"},
            ]
        },
    ])
    return answers
}