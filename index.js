const childProcess = require("child_process");
const fs = require("fs")

fs.writeFile("eula.txt", "eula=true", (error) => {
    if (error) {
        throw new Error(error)
    }
    childProcess.spawnSync("sh", ["-c", "java -jar ./server/leaf-1.20.4.jar"], {stdio: "inherit", stdin: "inherit"})
})