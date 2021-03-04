// Nivell 3
// Exercici 1
// Creu una funció que llisti per consola el contingut del directori d'usuari.
// Utilitzi node Child Processes.
function ls_dir_function() {
  const os = require("os");

  if (os.platform() === "win32") {
    const { spawn } = require("child_process");

    const username = os.userInfo().username;

    const defaults = {
      cwd: `C:\\Users\\ + ${username}`
    }

    const dir = spawn("dir", { shell: true }, defaults);

    dir.stdout.on("data", (data) => {
      console.log(`stdout: ${data}`);
    });

    dir.stdout.on("data", (data) => {
      console.log(`stderr: ${data}`);
    });

    dir.on("close", (code) => {
      console.log(`child process exited with code ${code}`);
    });

  } else {
    const { spawn } = require("child_process");
    const ls = spawn("ls", ["-lh", process.env.HOME]);

    ls.stdout.on("data", (data) => {
      console.log(`stdout: ${data}`);
    });

    ls.stderr.on("data", (data) => {
      console.log(`stderr: ${data}`);
    });

    ls.on("close", (code) => {
      console.log(`child process exited with code ${code}`)
    });
  }
}

ls_dir_function();
