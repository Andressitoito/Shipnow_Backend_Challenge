/////////////////////////////
// VARIABLES & IMPORTS
/////////////////////////////
import readline from "readline";
import { runCommand } from "./command/runCommand.js";

/////////////////////////////
// MAIN CONSOLE LOGIC
/////////////////////////////
function startConsole() {
	// Setup console to read and write to the actual console
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	function promptCommand() {
		// Ask a command to the user
		rl.question("Write a command > ", (input) => {
			// Pass to runCommand the input inserted by the user
			runCommand(input);

			// Use resursion to ask for another command
			promptCommand();
		});
	}
	promptCommand();
}

/////////////////////////////
// START THE CONSOLE
/////////////////////////////
startConsole();
