const { workerData } = require("node:worker_threads");

const execute = async () => {
	await workerData.cb();
};

execute();
