import { UserInput } from "./lib/input-user.js";

export async function Main(){
    const answers = await UserInput()
    console.log(answers)
}

Main()