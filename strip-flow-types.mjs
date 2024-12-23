import flowRemoveTypes from 'flow-remove-types';
import { readFileSync } from 'fs';

// Example of stripping types from a file
try {
  const fileContent = readFileSync('src/example-flow.js', 'utf8');
  const strippedFileContent = flowRemoveTypes(fileContent);
  console.log("\nStripped content from file:");
  console.log(strippedFileContent.toString());
} catch (error) {
  console.log("Error reading file:", error.message);
}