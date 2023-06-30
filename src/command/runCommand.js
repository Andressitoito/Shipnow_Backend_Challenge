import {
	ChangeDirectory,
	Destroy,
	List,
	Metadata,
	ShowPath,
	clearConsole,
	createFile,
	createFolder,
	help,
	quit,
	showFile,
} from "../lib/interactiveCommands.js";

////////////////////////////
// MAIN COMMAND FUNCTION
/////////////////////////////
export function runCommand(input) {
	if (input === "quit") {
		quit();
	} else if (input.startsWith("clear")) {
		clearConsole();
	} else if (input.startsWith("ls")) {
		List();
	} else if (input.startsWith("whereami")) {
		ShowPath();
	} else if (input.startsWith("destroy ")) {
		Destroy(input);
	} else if (input.startsWith("cd ")) {
		ChangeDirectory(input);
	} else if (input.startsWith("show ")) {
		showFile(input);
	} else if (input.startsWith("metadata ")) {
		Metadata(input);
	} else if (input.startsWith("create_file ")) {
		createFile(input);
	} else if (input.startsWith("create_folder ")) {
		createFolder(input);
	} else if (input === "help") {
		help();
	} else if (input === "cd") {
		console.log(
			`This command requires an argument 'cd ..' or 'cd directory_name'
			`
		);
	} else if (input === "destroy") {
		console.log(
			`This command requires an argument 
destroy "file_name" or destroy "folder_name"
			`
		);
	} else if (input === "metadata") {
		console.log(
			`This command requires an argument 
metadata "file_name"
			`
		);
	} else if (input === "show") {
		console.log(
			`This command requires an argument
show "file_name"
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
			
For a list of available commands try 'help'
`
		);
	}
}
