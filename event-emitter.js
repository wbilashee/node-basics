const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
    console.log(`data received user ${name} with id:${id}`);
});

customEmitter.on("response", () => {
    console.log("another data received");
});

customEmitter.emit("response", "peter", 24);

// Using class
class Coder extends EventEmitter {
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
    }
}

const susan = new Coder("Susan", 28);

susan.on("call", () => {
    console.log(`${susan.name} is ${susan.age} years old`);
});

susan.emit("call");