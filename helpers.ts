export function convertToAnchor(argument: string, url: string): string {
  return `<a href="${url}">${argument}</a>`;
}

export function convertToParagraph(argument: string): string {
  return `<p>${argument}</p>`;
}
