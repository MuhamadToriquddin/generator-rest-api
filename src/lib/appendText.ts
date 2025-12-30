import { appendFile } from "node:fs/promises";

export async function AppendText(filePath:string,text:string){
    try {
        const newText = `\n${text}`
        await appendFile(filePath,newText)
    } catch (error) {
        throw new Error("Append new text operation failed")
    }
}