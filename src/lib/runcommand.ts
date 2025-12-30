import { spawn } from "node:child_process";

export async function RunCommand(
  command: string,
  args: string[]
): Promise<void> {
  return new Promise((resolve, reject) => {
    const process = spawn(command, args, {
      shell: true,
      stdio: "inherit",
    });

    process.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Can't run command in terminal`));
      }
    });
  });
}
