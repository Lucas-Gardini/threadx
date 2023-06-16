"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Thread = void 0;
const node_worker_threads_1 = require("node:worker_threads");
class Thread {
    constructor(cb) {
        const worker = new node_worker_threads_1.Worker("./executor.ts", { eval: true, workerData: { cb } });
        return worker;
    }
}
exports.Thread = Thread;
