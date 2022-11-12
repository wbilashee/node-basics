const { readFile, writeFile } = require("fs").promises;
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFile("../content/first.txt", "utf8");
        await writeFile(
            "../content/result.txt",
            `This is the result file. ${first}`,
            { flag: "a" }
        );
        console.log(first);
    } catch (error) {
        console.log(error);
    }
}

start();