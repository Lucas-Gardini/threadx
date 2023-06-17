import { Worker } from "node:worker_threads";

export class Thread {
	constructor(cb: (...params: any) => void) {
		console.log("Creating thread");

		console.log(`${cb.toString()}()`);

		const worker = new Worker(`${cb.toString()}()`, { eval: true });

		return worker;
	}
}
