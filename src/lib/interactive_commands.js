/////////////////////////////
// VARIABLES & IMPORTS
/////////////////////////////
import {
	cd,
	create_folder,
	create_file,
	show,
	metadata,
 createFileSystem,
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
	let file_name = input.split(" ")[1];
	file_name = file_name.replace(/['"]/g, "").trim();
	const content = input.split(" ").slice(2).join(" ");

	if (file_name === "" || content === "") {
		return console.log(
			`This command requires two arguments, both arguments must not be empty
create_file "file_name" "content"			
			`
		);
	}
	create_file(myFileSystem, file_name, content);
	console.log(`File ${file_name} was successfully created`);
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
	let folder_name = input.split(" ")[1];
	folder_name = folder_name.replace(/['"]/g, "").trim();

	if (folder_name === "") {
		return console.log(
			"This command requires an argument\ncreate_folder 'folder_name'")

  } 
	create_folder(myFileSystem, folder_name);
	console.log(`directory ${folder_name} was successfully created`);
}

// HELP
export function help() {
	console.log(
		`cd 'folder name'            	 Navigate to a folder
cd ..                        					Go back to parent directory
create_folder 'folder_name'  					Create a new folder in current directory
create_file	'file_name" "content'	Create a new text file in current directory
show	"file_name"													Show file in current directory
quit                         					End CLI session
`
	);
}
