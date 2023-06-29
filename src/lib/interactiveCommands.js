/////////////////////////////
// VARIABLES & IMPORTS
/////////////////////////////
import {
	changeDirectory,
	create_folder,
	create_file,
	show,
	metadata,
	createFileSystem,
	list,
	showPath,
	destroy,
} from "../fileSystem/filesystem.js";

/////////////////////////////
// CREATE ROOT DIRECTORY
/////////////////////////////
const myFileSystem = createFileSystem();

/////////////////////////////
// INTERACTIVE COMMANDS
/////////////////////////////

// QUIT
export function quit() {
	console.log("Exiting command prompt");
	process.exit(0);
}
// CREATE FILE
export function createFile(input) {
	const file_name = input.split(" ")[1].replace(/['"]/g, "").trim();
	const content = input.split(" ").slice(2).join(" ");

	if (file_name === "" || content === "") {
		return console.log(
			`This command requires two arguments, both arguments must not be empty
create_file "file_name" "content"			
			`
		);
	}
	create_file(myFileSystem, file_name, content);
	// console.log(`File ${file_name} was successfully created`);
}

// SHOW FILE
export function showFile(input) {
	const file_name = input.split(" ")[1];
	show(myFileSystem, file_name);
}

// METADATA
export function Metadata(input) {
	const file_name = input.split(" ")[1];
	metadata(myFileSystem, file_name);
}

// CREATE FOLDER
export function createFolder(input) {
	const folder_name = input.split(" ")[1].replace(/['"]/g, "").trim();

	if (folder_name === "") {
		return console.log(
			"This command requires an argument\ncreate_folder 'folder_name'"
		);
	}
	create_folder(myFileSystem, folder_name);
	// console.log(`directory ${folder_name} was successfully created`);
}

// CHANGE DIRECTORY
export function ChangeDirectory(input) {
	const targetDir = input.split(" ")[1].replace(/['"]/g, "").trim();

	changeDirectory(myFileSystem, targetDir);
}

// LIST FILES AND FOLDERS
export function List() {
	return console.log(list(myFileSystem));
}

// DESTROY FOLDER / FILE
export function Destroy(input) {
	const targetDir = input.split(" ")[1].replace(/['"]/g, "").trim();

	destroy(myFileSystem, targetDir);
}

// SHOW PATH
export function ShowPath() {
	showPath(myFileSystem);
}

// HELP
export function help() {
	console.log(`cd 'folder name'                    Navigate to a child directory
cd ..                               Go back to the parent directory
ls                                  List all files and archives
whereami                            Show current directory
create_folder 'folder_name'         Create a new folder in the current directory
create_file 'file_name' 'content'   Create a new text file in the current directory
show 'file_name'                    Show the content of a file in the current directory
destroy                             Permanently erase folders or files
metadata                            Show metadata
help                                Show list of available commands
quit                                End the CLI session`);
}
