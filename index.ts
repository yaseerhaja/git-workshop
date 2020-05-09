import { convertToAnchor, convertToParagraph } from "./helpers";

// This function awesomely returns what it gets
function myAwesomeFunction(argument: string): string {
  const url = "https://www.google.com";
  return convertToParagraph(convertToAnchor(argument, url));
}
