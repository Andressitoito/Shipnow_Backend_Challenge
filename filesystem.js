/////////////////////////////
// CREATE MAIN FILE SYSTEM
/////////////////////////////
export function createFileSystem() {
	// Root directory
	const rootDirectory = {
		name: "/",
		type: "directory",
		children: [],
	};

	const dir_1 = {
		name: "dir_1",
		type: "directory",
		children: [],
		parent: undefined,
	};

	const file_1 = {
		name: "file_1.txt",
		type: "file",
		size: 1024,
		content: "file_1 content",
	};

	dir_1.children.push(file_1);
	dir_1.parent = rootDirectory;
	rootDirectory.children.push(dir_1);

	const fileSystem = {
		root: rootDirectory,
		currentDirectory: rootDirectory,
	};

	return fileSystem;
}

/////////////////////////////
// CHANGE DIRECTORY FUNCTIONS
/////////////////////////////
function getParentDirectory(directory) {
	return directory.parent || null;
}

function getChildDirectory(directory, name) {
	return directory.children.find((child) => child.name === name) || null;
}

export function cd(fileSystem, targetDir) {
	// Go to parent directory
	if (targetDir === "..") {
		if (fileSystem.currentDirectory !== fileSystem.root) {
			fileSystem.currentDirectory = getParentDirectory(
				fileSystem.currentDirectory
			);
		}
		// Go to child directory
	} else {
		const childDirectory = getChildDirectory(
			fileSystem.currentDirectory,
			targetDir
		);
		if (childDirectory && childDirectory.type === "directory") {
			fileSystem.currentDirectory = childDirectory;
		} else {
			console.log("Directory not found: ", targetDir);
		}
	}
}

/////////////////////////////
// CREATE NEW FILE
/////////////////////////////
export function create_file(fileSystem, file_name, content) {
	const file = fileSystem.currentDirectory.children.find(
		(child) => child.type === "file" && child.name === file_name
	);
	if (file) {
		return console.log(`This file name: "${file_name}" is already in use`);
	}

	const file_size = Buffer.byteLength(content, "utf8");
	fileSystem.currentDirectory.children.push({
		name: file_name,
		type: "file",
		size: file_size,
		content: content,
	});
}

/////////////////////////////
// SHOW FILE
/////////////////////////////
export function show_file(fileSystem, file_name) {
	const file = fileSystem.currentDirectory.children.find(
		(child) => child.type === "file" && child.name === file_name
	);
	if (file) {
		console.log(file);
	} else {
		console.log("File not found: ", file_name);
	}
}

/////////////////////////////
// CREATE NEW FOLDER
/////////////////////////////
export function create_folder(fileSystem, name) {
	if (
		fileSystem.currentDirectory.children.find((child) => child.name === name)
	) {
		return console.log(`This folder name: "${name}" is already in use`);
	}

	return fileSystem.currentDirectory.children.push({
		name: name,
		type: "directory",
		children: [],
		parent: fileSystem.currentDirectory,
	});
}
