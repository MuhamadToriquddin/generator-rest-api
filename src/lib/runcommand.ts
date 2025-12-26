import { spawn } from "node:child_process";
import { inherits } from "node:util";

export async function RunCommand(command:string,args:string[]): Promise<void>{
    return new Promise((resolve, reject) => {
    const process = spawn(command, args, {
      shell: true,
      stdio: 'inherit' // Ini akan menampilkan output langsung ke terminal kamu
    });

    process.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Proses berhenti dengan kode: ${code}`));
      }
    });
  });

}