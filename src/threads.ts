import { Worker } from "node:worker_threads";

export class Thread {
	constructor(cb: (...params: any) => void) {
		const worker = new Worker("./executor.ts", { eval: true, workerData: { cb } });

		return worker;
	}
}
