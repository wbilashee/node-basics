const os = require("os");

// info about current user
const user = os.userInfo();

// method returns the system uptime in seconds
const uptime = os.uptime();

// method returns the currentOS details
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}