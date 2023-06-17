"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Thread = void 0;
const node_worker_threads_1 = require("node:worker_threads");
const defaultStructure = `
const { parentPort, isMainThread } = require("node:worker_threads");

async function execute() {
	await (THREADED_FUNCTION)();
	parentPort.postMessage("done");
}

execute();
`;
class Thread {
    constructor(cb) {
        const worker = new node_worker_threads_1.Worker(defaultStructure.replace("THREADED_FUNCTION", cb.toString()), { eval: true });
        this.worker = worker;
    }
    on(event, cb) {
        this.worker.on(event, cb);
    }
}
exports.Thread = Thread;
