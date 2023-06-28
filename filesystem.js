/////////////////////////////
// CREATE MAIN FILE SYSTEM
/////////////////////////////
function createFileSystem() {
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

function cd(fileSystem, targetDir) {
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

module.exports = { createFileSystem, cd };
