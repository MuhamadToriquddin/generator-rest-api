import { cp } from "node:fs/promises";

export async function MoveTemplate(source:string,destination:string){
    try {
        await cp(source,destination,{
            recursive:true
        })
    } catch (error) {
        throw new Error("Move templates operation failed")
    }
}