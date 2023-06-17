"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const threads_1 = require("./threads");
async function test() {
    console.log(`${chalk_1.default.bgWhite(chalk_1.default.green(" TESTING THREADX "))}`);
    const thread = new threads_1.Thread(async () => {
        console.log(`${chalk_1.default.bgWhite(chalk_1.default.green(" THREAD "))} Thread is running!`);
        setTimeout(() => {
            console.log(`${chalk_1.default.bgWhite(chalk_1.default.green(" THREAD "))} Thread is done!`);
        }, 1000);
    });
    thread.on("error", (err) => {
        console.log("Thread errored with error:", err);
    });
    thread.on("exit", () => {
        console.log("Thread exited");
    });
    thread.on("message", (msg) => {
        console.log("Thread sent message");
        console.log(msg);
    });
}
test();
