import { rename } from "node:fs/promises"

export async function RenameFile(oldName:string, newName:string){
    try {
        await rename(oldName,newName)
    } catch (e) {
        throw new Error("Rename file operation failed")
    }
}