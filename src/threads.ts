import { Worker } from "node:worker_threads";

const defaultStructure = `
const { parentPort, isMainThread } = require("node:worker_threads");

async function execute() {
	await (THREADED_FUNCTION)();
	parentPort.postMessage("done");
}

execute();
`;

export class Thread {
	private worker: Worker;

	constructor(cb: (...params: any) => void) {
		const worker = new Worker(defaultStructure.replace("THREADED_FUNCTION", cb.toString()), { eval: true });

		this.worker = worker;
	}

	public on(event: "error" | "exit" | "message", cb: (...params: any) => void) {
		this.worker.on(event, cb);
	}
}
