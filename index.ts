// This function awesomely returns what it gets
function myAwesomeFunction(argument: string): string {
  return convertToAnchor(argument, "https://www.altavista.com");
}

function convertToAnchor(argument: string, url: string): string {
  return `<a href="${url}">${argument}</a>`;
}
