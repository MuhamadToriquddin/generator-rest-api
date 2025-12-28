import path from "node:path";
import { cp,readdir,readFile } from "node:fs/promises";
import { GetCurrentPath } from "./getCurrentPath.js";
import { fileURLToPath } from "node:url";
import { RenameGitIgnore } from "./renameGitIgnore.js";
import { RenameEnv } from "./renameEnv.js";

export async function GenerateStructure(){
    const targetDir = GetCurrentPath()
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const templateDir = path.resolve(__dirname,"../../templates")
    
    console.log("[PROCESS] Generate structure")
    try {
        const contents = await readdir(templateDir)
        console.log(contents)
        await cp(templateDir, targetDir,{
            recursive:true,
        }) 
        await RenameGitIgnore(targetDir)
        await RenameEnv(targetDir)
        console.log("[SUCCESS] Generate structure")
    } catch (error) {
        console.error("[FAILED] Generate structure")
    }
}