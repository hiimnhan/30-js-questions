// import the function
import { convertToJSONString } from "../src/1-js-to-json-string.ts"; // Update with the correct file name

describe("convertToJSONString", () => {
  // Test case 1: Object with string, number, and boolean properties
  test("Converts an object to JSON string", () => {
    const inputObject = { key1: "value1", key2: 42, key3: true };
    const jsonString = convertToJSONString(inputObject);
    const expectedJsonString = '{"key1":"value1","key2":42,"key3":true}';
    expect(jsonString).toBe(expectedJsonString);
  });

  // Test case 2: Array of numbers
  test("Converts an array to JSON string", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const jsonString = convertToJSONString(inputArray);
    const expectedJsonString = "[1,2,3,4,5]";
    expect(jsonString).toBe(expectedJsonString);
  });

  // Test case 3: String value
  test("Converts a string to JSON string", () => {
    const inputString = "Hello, World!";
    const jsonString = convertToJSONString(inputString);
    const expectedJsonString = '"Hello, World!"';
    expect(jsonString).toBe(expectedJsonString);
  });

  // Test case 4: Null value
  test("Converts null to JSON string", () => {
    const inputNull = null;
    const jsonString = convertToJSONString(inputNull);
    const expectedJsonString = "null";
    expect(jsonString).toBe(expectedJsonString);
  });

  // Test case 5: Error handling for invalid JSON
  test("Handles invalid JSON", () => {
    // Providing a circular reference to intentionally cause an error
    const circularObject: any = {};
    circularObject.circularReference = circularObject;
    const jsonString = convertToJSONString(circularObject);
    expect(jsonString).toBeNull();
  });
});
