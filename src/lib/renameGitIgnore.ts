import path from "node:path";
import { rename } from "node:fs/promises";

export async function RenameGitIgnore(targetDir:string){
    const gitIgnorePath = path.join(targetDir,"gitignore.txt")
    const targetGitIgnore = path.join(targetDir,".gitignore")

    try {
        await rename(gitIgnorePath,targetGitIgnore)
    } catch (error) {
       console.error("Failed to rename gitignore") 
    }
}