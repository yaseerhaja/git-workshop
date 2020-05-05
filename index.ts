// This function awesomely returns what it gets
function myAwesomeFunction(argument: string): string {
  return myHelperFunction(myOtherHelperFunction(argument));
}

// Wraps the argument with parentheses
function myHelperFunction(argument: string): string {
  return `(${argument})`;
}

// Wraps the argument with brackets
function myOtherHelperFunction(argument: string): string {
  return `[${argument}]`;
}
