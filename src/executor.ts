import { workerData, parentPort } from "node:worker_threads";

const execute = async () => {
	try {
		console.log(workerData);
		console.log("Thread started");
		const cb = new Function(`return ${workerData}`)();
		await cb();
		console.log("Thread finished");
		parentPort?.postMessage("done");
	} catch (error) {
		console.log("Thread errored", error);
	}
};

execute();
