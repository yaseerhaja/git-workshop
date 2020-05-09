// This function awesomely returns what it gets
function composeHTML(argument: string): string {
  return convertToParagraph(
    convertToAnchor(argument, "https://www.altavista.com")
  );
}

function convertToAnchor(argument: string, url: string): string {
  return `<a href="${url}">${argument}</a>`;
}

function convertToParagraph(argument: string): string {
  return `<p>${argument}</p>`;
}
