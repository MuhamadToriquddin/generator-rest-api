import { RunCommand } from "../lib/runcommand.js";

export async function InstallDependency (){
    try {
        console.log("Creating file package.json")
        await RunCommand("npm",["init","-y"])
        console.log("Successfully create file package.json")
    } catch (error) {
        console.error(error)
    }
    try {
        console.log("Installing default dependency for REST API")
        await RunCommand("npm", ["install","express","dotenv","cors","express-rate-limit","helmet","morgan"])
        console.log("Successfully install default dependency")
    } catch (error) {
        console.error(error)
    }

    try {
        console.log("Installing type for default dependency for REST API")
        await RunCommand("npm", ["install","@types/node","@types/dotenv","@types/cors","express-rate-limit","@types/helmet","@types/morgan"])
        console.log("Successfully install default types dependency")
    } catch (error) {
        console.error(error)
    }

}