import chalk from "chalk";
import { Thread } from "./threads";

async function test() {
	console.log(`${chalk.bgWhite(chalk.green(" TESTING THREADX "))}`);

	const thread = new Thread(async () => {
		console.log(`${chalk.bgWhite(chalk.green(" THREAD "))} Thread is running!`);

		setTimeout(() => {
			console.log(`${chalk.bgWhite(chalk.green(" THREAD "))} Thread is done!`);
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
