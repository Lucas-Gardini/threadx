"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Thread = void 0;
const node_worker_threads_1 = require("node:worker_threads");
class Thread {
    constructor(cb) {
        cb();
        console.log("Creating thread");
        console.log(`${cb.toString()}()`);
        const worker = new node_worker_threads_1.Worker(`${cb.toString()}()`, { eval: true });
        return worker;
    }
}
exports.Thread = Thread;
