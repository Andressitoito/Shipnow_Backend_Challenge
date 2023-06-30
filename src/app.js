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
		terminal: false
	});

	function promptCommand() {
		// Ask a command to the user
		rl.question(" > ", (input) => {
			runCommand(input);

			// Use recursion to ask for another command
			promptCommand();
		});
	}

	promptCommand();
}

/////////////////////////////
// START THE CONSOLE
/////////////////////////////
startConsole();
