import path from "node:path";
import { cp,readdir,readFile } from "node:fs/promises";
import { GetCurrentPath } from "../lib/getCurrentPath.js";
import { fileURLToPath } from "node:url";
import { RenameGitIgnore } from "../lib/renameGitIgnore.js";
import { RenameEnv } from "../lib/renameEnv.js";

export async function GenerateStructure(){
    const targetDir = GetCurrentPath()
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const templateDir = path.resolve(__dirname,"../../templates")
    
    console.log("Starting creating template")
    try {
        const contents = await readdir(templateDir)
        console.log(contents)
        await cp(templateDir, targetDir,{
            recursive:true,
        }) 
        console.log("Template created")
        await RenameGitIgnore(targetDir)
        console.log("Success rename gitignore")
        await RenameEnv(targetDir)
        console.log("Success rename env")
    } catch (error) {
        console.error("Failed creating template")
    }
}