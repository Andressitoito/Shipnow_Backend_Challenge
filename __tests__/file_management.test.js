/////////////////////////////
// VARIABLES & IMPORTS
/////////////////////////////
import { create_file } from "../src/fileSystem/filesystem.js";

/////////////////////////////
// TESTS
/////////////////////////////
describe("create_file", () => {
	test("should create a new file", () => {
		// Arrange
		const fileSystem = {
			currentDirectory: {
				children: [],
			},
		};
		const fileName = "test.txt";
		const content = "Hello, world!";

		// Act
		create_file(fileSystem, fileName, content);

		// Assert
		expect(fileSystem.currentDirectory.children).toHaveLength(1);
		expect(fileSystem.currentDirectory.children[0].name).toBe(fileName);
		expect(fileSystem.currentDirectory.children[0].type).toBe("file");
		expect(fileSystem.currentDirectory.children[0].content).toBe(content);
	});

	test("should not create a file with an existing name", () => {
		// Arrange
		const fileSystem = {
			currentDirectory: {
				children: [{ name: "existing.txt", type: "file" }],
			},
		};
		const fileName = "existing.txt";
		const content = "New content";

		// Act
		create_file(fileSystem, fileName, content);

		// Assert
		expect(fileSystem.currentDirectory.children).toHaveLength(1);
		// The existing file should not be overwritten
		expect(fileSystem.currentDirectory.children[0].content).not.toBe(content);
	});
});
