import path from "node:path";
import { GetCurrentPath } from "./getCurrentPath.js";
import { fileURLToPath } from "node:url";
import { MoveTemplate } from "./moveTemplate.js";
import { RenameFile } from "./renameFile.js";

export async function GenerateStructure(framework:string){
    const targetDir = GetCurrentPath()
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const structureDir = path.resolve(__dirname,`../../templates/structure/${framework}`)
    const otherFilesDir = path.resolve(__dirname,`../../templates/other_file`)
    const oldGitIgnore = path.join(targetDir,"gitignore.txt")
    const newGitIgnore = path.join(targetDir,".gitignore")
    const oldEnv = path.join(targetDir,"env.txt")
    const newEnv = path.join(targetDir,".env")
    try {
        console.log("[PROCESS] Generate structure")
        await MoveTemplate(structureDir,targetDir)
        await MoveTemplate(otherFilesDir,targetDir) 
        await RenameFile(oldGitIgnore,newGitIgnore)
        await RenameFile(oldEnv,newEnv)
        console.log("[SUCCESS] Generate structure")
    } catch (e) {
        if (e instanceof Error){
            throw new Error(`[FAILED] Generate structure : ${e.message}`)
        }
        throw new Error(`[FAILED] Generate structure`)
    }
}