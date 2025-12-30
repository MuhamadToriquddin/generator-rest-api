import path from "node:path";
import { cp,readdir,readFile } from "node:fs/promises";
import { GetCurrentPath } from "./getCurrentPath.js";
import { fileURLToPath } from "node:url";
import { RenameGitIgnore } from "./renameGitIgnore.js";
import { RenameEnv } from "./renameEnv.js";

export async function GenerateStructure(framework:string){
    const targetDir = GetCurrentPath()
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const structureDir = path.resolve(__dirname,`../../templates/structure/${framework}`)
    const otherFilesDir = path.resolve(__dirname,`../../templates/other_file`)
    try {
        console.log("[PROCESS] Generate structure")
        await cp(structureDir, targetDir,{
            recursive:true,
        }) 
        await cp(otherFilesDir, targetDir,{
            recursive:true,
        }) 
        await RenameGitIgnore(targetDir)
        await RenameEnv(targetDir)
        console.log("[SUCCESS] Generate structure")
    } catch (error) {
        console.error("[FAILED] Generate structure")
    }
}