import path from "node:path";
import { rename } from "node:fs/promises";

export async function RenameEnv(targetDir:string){
    const gitEnvPath = path.join(targetDir,"env.txt")
    const targetEnv = path.join(targetDir,".env")

    try {
        await rename(gitEnvPath,targetEnv)
    } catch (error) {
       console.error("Failed to rename env") 
    }
}