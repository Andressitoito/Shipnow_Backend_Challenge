/////////////////////////////
// VARIABLES & REQUIRES
/////////////////////////////
import readline from "readline";
import {
	createFileSystem,
	cd,
	create_folder,
	create_file,
	show_file,
} from "./filesystem.js";

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
// CREATE ROOT DIRECTORY
/////////////////////////////
const myFileSystem = createFileSystem();

/////////////////////////////
// MAIN COMMAND FUNCTION
/////////////////////////////
function runCommand(input) {
	if (input === "quit") {
		quit();
	} else if (input.startsWith("show_file ")) {
		showFile(input);
	} else if (input.startsWith("create_file ")) {
		createFile(input);
	} else if (input.startsWith("create_folder ")) {
		createFolder(input);
	} else if (input === "--help") {
		help();
	} else if (input === "show_file") {
		console.log(
			`This command requires an argument
show_file "file_name"
			`
		);
	} else if (input === "create_folder") {
		console.log(
			`This command requires an argument
create_folder "folder_name"
			`
		);
	} else if (input === "create_file") {
		console.log(
			`This command requires two arguments
create_file "file_name" "content"			
			`
		);
	} else {
		console.log(
			`Command '${input}' not found
			
For a list of available commands try '--help'
`
		);
	}
}

/////////////////////////////
// INTERACTIVE COMMANDS
/////////////////////////////

// QUIT
function quit() {
	console.log("Exiting command prompt");
	process.exit(0);
}
// CREATE FILE
function createFile(input) {
	let file_name = input.split(" ")[1];
	file_name = file_name.replace(/['"]/g, "").trim();
	const content = input.split(" ").slice(2).join(" ");

	if (file_name === "" || content === "") {
		return console.log(
			`This command requires two arguments, none can be empty
create_file "file_name" "content"			
			`
		);
	}
	create_file(myFileSystem, file_name, content);
	console.log(`File ${file_name} was successfully created`);
}

// SHOW FILE
function showFile(input) {
	const file_name = input.split(" ")[1];
	show_file(myFileSystem, file_name);
}

// CREATE FOLDER
function createFolder(input) {
	let folder_name = input.split(" ")[1];
	folder_name = folder_name.replace(/['"]/g, "").trim();

	if (folder_name === "") {
		return console.log(
			`This command requires an argument
create_folder "folder_name"
			`
		);
	}
	create_folder(myFileSystem, folder_name);
	console.log(`directory ${folder_name} was successfully created`);
}

// HELP
function help() {
	console.log(
		`cd "folder name"            	 Navigate to a folder
cd ..                        					Go back to parent directory
create_folder "folder_name"  					Create a new folder in current directory
create_file	"file_name" "content"	Create a new text file in current directory
show_file	"file_name"													Show file in current directory
quit                         					End CLI session
`
	);
}

/////////////////////////////
// START THE CONSOLE
/////////////////////////////
startConsole();
