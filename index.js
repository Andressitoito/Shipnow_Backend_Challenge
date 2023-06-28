/////////////////////////////
// VARIABLES & REQUIRES
/////////////////////////////
const readline = require("readline");

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
// MAIN COMMAND FUNCTION
/////////////////////////////
function runCommand(input) {
	console.log("Inserted command:", input);

	if (input === "quit") {
		quit();
	}
}

/////////////////////////////
// INTERACTIVE FUNCTIONS
/////////////////////////////
function quit() {
	console.log("Exiting command prompt");
	process.exit(0);
}

/////////////////////////////
// START THE CONSOLE
/////////////////////////////
startConsole();
