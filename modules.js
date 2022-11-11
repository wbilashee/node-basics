// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./names");
const sayHi = require("./utils");

sayHi(names.susan);