const childProcess = require("child_process");
const fs = require("fs")

fs.writeFile("./server/eula.txt", "eula=true", (error) => {
    if (error) {
        throw new Error(error)
    }
    childProcess.spawnSync("sh", ["-c", "cd server && java -jar ./leaf-1.20.4.jar"], {stdio: "inherit", stdin: "inherit"})
})