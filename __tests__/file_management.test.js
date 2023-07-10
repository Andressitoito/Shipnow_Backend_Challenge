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
});
