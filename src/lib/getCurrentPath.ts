import { cwd } from "node:process";

export function GetCurrentPath(){
    const currentPath = cwd()
    return currentPath
}