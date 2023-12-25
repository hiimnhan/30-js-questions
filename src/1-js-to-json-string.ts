export function convertToJSONString(value: any): string | null {
  try {
    const jsonString: string = JSON.stringify(value);
    return jsonString;
  } catch (error) {
    console.log("error convert", error);
    return null;
  }
}
