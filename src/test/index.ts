import { Thread } from "../threads";

async function test() {
	console.log("Running test!");
	const thread = new Thread(async () => {
		console.log("Running threaded function");
		setTimeout(() => {
			throw new Error("test");
		});
	});

	setTimeout(() => {
		console.log("Thread exiting");
		process.exit(0);
	}, 10000);
}

test();
